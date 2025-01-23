const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
console.log(process.env.STRIPE_KEY);


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});


const plans = [
  {
    plan_id: "price_1QkMPHSFvUrzcqKrVngd1pPW",
    plan_name: "standard",
    duration: "month",
  },
  {
    plan_id: "price_1QkMQOSFvUrzcqKroTH39L2A",
    plan_name: "standard",
    duration: "year",
  },
];

//create subscription
app.post("/create-subscription", async (req,res)=>{
    const {plan_name, duration} = req.body;
    const plan = plans.find(_plan => _plan.plan_name === plan_name && _plan.duration === duration);
    console.log({plan});
    
    if (!plan) {
        return res.status(400).json({
          message: "Plan not found",
        })
    }

    try{
       
        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            payment_method_types: ["card"],
            line_items: [
                {
                    price: plan.plan_id,
                    quantity:1,
                },
            ],
            success_url: `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `http://localhost:5173/fail`,
            customer_email: 'uppularasagna@gmail.com'
        });

        return res.status(200).json({session})

    }catch(err){
        console.log(err);
        throw err
    }

    

})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });