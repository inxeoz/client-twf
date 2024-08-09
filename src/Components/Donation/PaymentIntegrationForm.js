// import React, { useState } from 'react';
// import axios from 'axios';

// const PaymentIntegrationForm = () => {
//   const [responseID, setResponseID] = useState('');
//   const [responseState, setResponseState] = useState({}); 

//   const loadScript = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   }

//   const createRazorPAyment = (amount) => {
//     let data = JSON.stringify({
//       amount: amount * 100, 
//       currency: "INR"
//     });

//     let config = {
//       method: 'post',
//       maxBodyLength: Infinity,
//       url: 'http://localhost:5000/payments',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       data: data
//     }

//     axios.request(config).then((response) => {
//       console.log(JSON.stringify(response.data));
//       handleRazorPayScreen(response.data.amount);
//     }).catch((err) => {
//       console.error("Error in payment creation:", err);
//     });
//   }

//   const handleRazorPayScreen = async (amount) => {
//     const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

//     if (!res) {
//       alert("Some error at Razorpay screen loading");
//       return;
//     }

//     const options = {
//       key: "rzp_test_MvsM37uWJWGR7B",
//       amount: amount, 
//       currency: "INR",
//       name: "TWKSAA FOUNDATION",
//       handler: function(response) {
//         setResponseID(response.razorpay_payment_id);
//       },
//       prefill: {
//         name: "USER",
//         email: "user@gmail.com"
//       },
//       theme: {
//         color: "#007500"
//       }
//     }

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   }

//   // const paymentFetch = (e) => {
//   //   e.preventDefault();
//   //   const paymentID = e.target.paymentID.value; 

//   //   if (!paymentID) {
//   //     alert("Please enter a payment ID.");
//   //     return;
//   //   }

//   //   axios.get(`http://localhost:5000/payment/${paymentID}`).then((response) => {
//   //     console.log(response.data);
//   //     setResponseState(response.data);
//   //   }).catch((err) => {
//   //     console.error("Error fetching payment:", err);
//   //   });
//   // }

 

//   return (
//     // <div className='flex flex-col gap-4 justify-center items-center'>
//     //   <button 
//     //     type="button" 
//     //     className='border border-black'
//     //     onClick={() => createRazorPAyment(100)}>Payment of 100rs.
//     //   </button>
//     //   {responseID && <p>{responseID}</p>}
//     //   <p className='font-extrabold'>Payment Verification Form</p>
//     //   {/* <form onSubmit={paymentFetch}>
//     //     <input type='text' name='paymentID' className='border border-black'/>
//     //     <button type='submit'>Fetch payment</button>
//     //     {responseState.amount && (
//     //       <ul>
//     //         <li>{responseState.amount / 100} Rs.</li>
//     //         <li>{responseState.currency} Rs.</li>
//     //         <li>{responseState.status} Rs.</li>
//     //         <li>{responseState.method} Rs.</li>
//     //       </ul>
//     //     )}
//     //   </form> */}
      
//     // </div>
//   );
// }

// // export default PaymentIntegrationForm;
