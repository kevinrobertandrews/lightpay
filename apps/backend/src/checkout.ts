import { config } from "./config";
import Stripe from "stripe";

const stripe = new Stripe(config.STRIPE_KEY!, {
  apiVersion: "2023-08-16",
});

export function createCheckoutSession(line_items: any[]) {
  return stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items,
    success_url: config.successUrl,
    cancel_url: config.cancelUrl,
  });
}
