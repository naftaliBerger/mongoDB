import express from "express";
import router from "./router/riddelsRoutes.js";

const app = express();
app.use(express.json());
app.use('/riddels',router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
