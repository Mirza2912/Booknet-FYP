import { Router } from "express";
import { paymentGateway } from "../controllers/payment.controller.js";

export const paymentRouter = Router();

paymentRouter.post("/create-checkout-session", paymentGateway);
