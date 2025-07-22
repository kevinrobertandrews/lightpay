import dotenv from "dotenv";
dotenv.config();

const config = {
  STRIPE_KEY: process.env.STRIPE_SECRET_KEY,
  successUrl: "http://localhost:5173/pages/success.html",
  cancelUrl: "http://localhost:5173/pages/cancel.html",
};

console.assert(config.STRIPE_KEY, "Stripe key is not set.");

export { config };
