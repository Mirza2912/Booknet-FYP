import express from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { error } from "./middlewares/error.middleware.js";
import fileUpload from "express-fileupload";

// cors options means who can access our backend from frontend
const corsOptions = {
  origin: process.env.ORIGIN,
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// app.use(express.static("public"));
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));

//Routes
import productRouter from "./routes/product.routes.js";
import userRouter from "./routes/user.routes.js";
import orderRouter from "./routes/order.routes.js";
import categoryRouter from "./routes/category.routes.js";
import cartRouter from "./routes/cart.routes.js";
import saleRouter from "./routes/sale.route.js";
import contactRouter from "./routes/contact.route.js";
import { paymentRouter } from "./routes/payment.route.js";

//For Products
app.use("/api/v1/products", productRouter);

//For Users
app.use("/api/v1/users", userRouter);

//For Orders
app.use("/api/v1/orders", orderRouter);

//For category
app.use("/api/v1/categories", categoryRouter);

//For cart
app.use("/api/v1/cart", cartRouter);

//For sales
app.use("/api/v1/sale", saleRouter);

//For contact
app.use("/api/v1/contact", contactRouter);

app.use("/api/v1/payments", paymentRouter);

//Using error() middleware for throwing ApiError
app.use(error);
