import Stripe from "stripe";
import config from "../config/config";

export const stripe = new Stripe(config.stripe_secret_key);
