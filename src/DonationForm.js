import React, { useState } from 'react';
import axios from 'axios';
import './index'
import { Link, useNavigate } from 'react-router-dom';

const DonationForm = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [errors, setErrors] = useState({});

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };
    const validateForm = () => {
        const newErrors = {};
        let isValid = true;
        if (!userName) {
            newErrors.userName = 'Name is required!';
            isValid = false;
        }
        if (!email) {
            newErrors.email = 'Email is required!';
            isValid = false;
        }
        if (!contactNo) {
            newErrors.contactNo = 'Contact No is required!';
            isValid = false;
        }
        if (!address) {
            newErrors.address = 'Address is required!';
            isValid = false;
        }
        if (!amount || isNaN(amount) || amount <= 0) {
            newErrors.amount = 'Valid amount is required!';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const createRazorPayPayment = async () => {
        if (!validateForm()) {
            return;
        }

        let data = JSON.stringify({
            amount: amount * 100,
            currency: 'INR',
        });

        let config = {
            method: 'post',
            url: 'http://localhost:5000/payments',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        try {
            const response = await axios.request(config);
            handleRazorPayScreen(response.data);
        } catch (err) {
            console.error('Error in payment creation:', err);
        }
    };

    const handleRazorPayScreen = async (paymentData) => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Some error occurred while loading the Razorpay script');
            return;
        }

        const options = {
            key: 'rzp_test_MvsM37uWJWGR7B',
            amount: paymentData.amount,
            currency: 'INR',
            name: 'TWKSAA FOUNDATION',
            description: 'Donation Payment',
            handler: function (response) {
                console.log('Payment Success:', response);
            },
            prefill: {
                name: userName,
                email: email,
                contact: contactNo,
            },
            theme: {
                color: '#0000ff',
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/DonationForm">Donation</Link></li>
                    <li><Link to="/LoginForm">Login</Link></li>
                    <li><Link to="/SignupForm">Join</Link></li>
                </ul>
            </nav>
            <div className="flex justify-center w-screen h-screen">
                <div className="w-full max-w-4xl bg-white p-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-800 m-4 mt-7">Support!</h1>
                        <h3 className="text-2xl font-extrabold text-blue-800 mb-4">TWKSAA WALFARE FOUNDATION</h3>
                        <p className="text-lg py-5 text-gray-700">
                            Your contribution will empower students and educators, fostering innovation and academic excellence. Together, we can shape the future of education and research.
                        </p>
                    </div>

                    <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">User Details:</h3>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.userName && <span className='text-sm text-red-500'>{errors.userName}</span>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.email && <span className='text-sm text-red-500'>{errors.email}</span>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact No</label>
                            <input
                                id="contact"
                                type="tel"
                                value={contactNo}
                                onChange={(e) => setContactNo(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.contactNo && <span className='text-sm text-red-500'>{errors.contactNo}</span>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                id="address"
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.address && <span className='text-sm text-red-500'>{errors.address}</span>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Donation Amount(INR)</label>
                            <input
                                id="amount"
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.amount && <span className='text-sm text-red-500'>{errors.amount}</span>}
                        </div>

                        <button
                            type="button"
                            onClick={createRazorPayPayment}
                            className="w-full bg-blue-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            Proceed to Payment

                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default DonationForm;
