import { getAllProducts, addProduct } from "../DAL/dal.js";

export async function getProducts(req, res) {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to get products" });
  }
}

export async function createProduct(req, res) {
  try {
    const result = await addProduct(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to add product" });
  }
}
