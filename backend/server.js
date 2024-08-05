const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());


// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// to POST API 

app.post('/payments', async (req , res) => {
    const razorpay = new Razorpay({
        key_id:"rzp_test_MvsM37uWJWGR7B",
        key_secret:"28FqDMPZuaYozvsGuOmmgLtf"
    })

    const options = {
        amount: req.body.amount,
        currency: req.body.currency,
        receipt:"receipt#1",
        payment_capture:1
    }

    try{
        const response = await razorpay.orders.create(options)

        res.json({
            currency:response.currency,
            amount:response.amount
        })
    }
    catch(error){
        res.status(500).send("Internal Server Error");
    }
})

// to get API

app.get("payment/:paymentID" , async(req , res) => {
    const paymentID = req.params;

    const razorpay = new Razorpay({
        key_id:"rzp_test_MvsM37uWJWGR7B",
        key_secret:"28FqDMPZuaYozvsGuOmmgLtf"
    })

    try {
        const payment = await razorpay.payments.fetch(paymentID);

        if(!payment){
            return res.status(500).send("error at razorpay loading");
        }

        res.json({
            status:payment.status,
            method:payment.method,
            amount:payment.amount,
            currency:payment.currency
        })
    }
    catch(error){
        res.status(500).send("Failed to Fetch Razorpay ")
    }
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
