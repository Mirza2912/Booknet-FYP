import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const paymentGateway = async (req, res) => {
  const { cartItems } = req.body;
  console.log(cartItems);

  const line_items = cartItems.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.product.name,
      },
      unit_amount: item.product.price * 100,
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "http://localhost:5173",
      // cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
};
