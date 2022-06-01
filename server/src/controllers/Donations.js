import { Op } from "sequelize";
import { Donations } from "../models";
import bodyParser from "body-parser";

const stripe = require("stripe")(
  "sk_test_51L5r0gKTuzmAbAyRrubXxyvVcM1BVYfgqLYRl8O3mv2yehl8gziztv5rcM5HjA2E4bkefR7oXiht96nPWGWO9L6n00CccQsGdT	"
);

const ENDPOINT_SECRET =
  "whsec_84fb177c3ecc9fcdb4abff8f74c46619b75b927ea7482863bb2a51a6a7302176";

export const createDonationIntent = [
  async (req, res) => {
    try {
      const { amount, name, lastName, email, phone, msg } = req.body;

      const line_items = [
        {
          price_data: {
            currency: "EUR",
            product_data: { name: "Formula Time Donation" },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ];

      const sessionOptions = {
        customer_email: email,
        line_items,
        payment_method_types: ["card"],
        mode: "payment",
        success_url: "http://localhost:8080/dona/success",
        cancel_url: "http://localhost:8080/dona/cancel",
        metadata: {
          amount,
          name,
          lastName,
          email,
          phone,
          msg,
        },
      };

      const session = await stripe.checkout.sessions.create(sessionOptions);

      res.json(session.url);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: true });
    }
  },
];

export const getDonations = [
  async (req, res) => {
    const donations = await Donations.findAll({ order: [["amount", "DESC"]] });
    res.json(donations);
  },
];

export const stripeWebHook = [
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const payload = req.body;

    const sig = req.headers["stripe-signature"];

    let event;
    try {
      event = stripe.webhooks.constructEvent(payload, sig, ENDPOINT_SECRET);
    } catch (err) {
      console.log(err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    console.log("Event Type: ", event.type);
    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const expandedSession = await stripe.checkout.sessions.retrieve(
        session.id,
        {
          expand: ["line_items"],
        }
      );

      const { amount, name, lastName, email, phone, msg } =
        expandedSession.metadata;
      await Donations.create({
        amount,
        name,
        lastName,
        email,
        phone,
        msg,
      });
    }

    res.status(200);
  },
];
