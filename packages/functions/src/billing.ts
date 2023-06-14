import Stripe from "stripe";
import handler from "@notes/core/handler";
import { calculateCost } from "@notes/core/cost";

export const main = handler(async (event: any) => {
  const { storage, source } = JSON.parse(event.body);
  const amount = calculateCost(storage);
  const description = "Scratch charge";
  const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
    ? process.env.STRIPE_SECRET_KEY
    : "";

  // Load our secret key from the  environment variables
  const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });

  await stripe.charges.create({
    source,
    amount,
    description,
    currency: "usd",
    shipping: {
      name: "Jenny Rosen",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
  });

  return { status: true };
});
