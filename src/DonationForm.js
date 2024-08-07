import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './DonationForm.css';

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
            alert('Error loading Razorpay script');
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
            <div className="flex center full-screen">
                <div className="form-container">
                    <div className="text-center">
                        <h1 className="title">Support!</h1>
                        <h3 className="subtitle">TWKSAA WALFARE FOUNDATION</h3>
                        <p className="description">
                            Your contribution will empower students and educators, fostering innovation and academic excellence. Together, we can shape the future of education and research.
                        </p>
                    </div>

                    <form className="form">
                        <h3 className="section-title">User Details:</h3>

                        <div className="input-group">
                            <label htmlFor="name" className="label">Name</label>
                            <input
                                id="name"
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="input"
                            />
                            {errors.userName && <span className='error'>{errors.userName}</span>}
                        </div>

                        <div className="input-group">
                            <label htmlFor="email" className="label">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input"
                            />
                            {errors.email && <span className='error'>{errors.email}</span>}
                        </div>

                        <div className="input-group">
                            <label htmlFor="contact" className="label">Contact No</label>
                            <input
                                id="contact"
                                type="tel"
                                value={contactNo}
                                onChange={(e) => setContactNo(e.target.value)}
                                className="input"
                            />
                            {errors.contactNo && <span className='error'>{errors.contactNo}</span>}
                        </div>

                        <div className="input-group">
                            <label htmlFor="address" className="label">Address</label>
                            <input
                                id="address"
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="input"
                            />
                            {errors.address && <span className='error'>{errors.address}</span>}
                        </div>

                        <div className="input-group">
                            <label htmlFor="amount" className="label">Donation Amount (INR)</label>
                            <input
                                id="amount"
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="input"
                            />
                            {errors.amount && <span className='error'>{errors.amount}</span>}
                        </div>

                        <button
                            type="button"
                            onClick={createRazorPayPayment}
                            className="submit-btn"
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
