import { connectDB } from "../db.js";

export async function getAllProducts() {
  const db = await connectDB();
  return db.collection("products").find().toArray();
}

export async function addProduct(product) {
  const db = await connectDB();
  return db.collection("products").insertOne(product);
}
