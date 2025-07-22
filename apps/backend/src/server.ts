import express from "express";
import cors from "cors";
import handlers from "./handlers";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://lightpaydemo.netlify.app",
  "https://lightpay-production.up.railway.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // ✅ allow the request
      } else {
        callback(new Error("Not allowed by CORS")); // ❌ reject
      }
    },
  })
);

app.use(express.json());

app.use(handlers);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running at http://localhost:3000");
});
