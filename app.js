import express from "express";
import router from "./router/productsRoutes.js";

const app = express();
app.use(express.json());
app.use('/products',router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
