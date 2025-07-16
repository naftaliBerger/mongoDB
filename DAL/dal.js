import { connectDB } from "../db.js";
import { ObjectId } from "mongodb";

export async function getAllriddels() {
  const db = await connectDB();
  return db.collection("products").find().toArray();
}

export async function addriddels(product) {
  const db = await connectDB();
  return db.collection("products").insertOne(product);
}

export async function getRiddelById(id) {
  const db = await connectDB();
  return db.collection("products").findOne({ _id: id });
}

export async function updateRiddelById(id, product) {
  const db = await connectDB();
  return db.collection("products").updateOne({ _id: new ObjectId(id) },
  { $set: product });
}

export async function deleteRiddleById(id) {
  const db = await connectDB();
  return db.collection("products").deleteOne({ _id: new ObjectId(id) });
}