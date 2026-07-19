import Stripe from "stripe";
import config from "../config/config";

// console.log(config.stripe_secret_key);

export const stripe = new Stripe(config.stripe_secret_key);
