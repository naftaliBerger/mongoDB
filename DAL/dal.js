import { connectDB } from "../db.js";
import { ObjectId } from "mongodb";

export async function getAllriddels() {
  const db = await connectDB();
  return db.collection("Reports").find().toArray();
}

export async function addriddels(report) {
  if (!report.timestamp) 
  report.timestamp = new Date();
  if (typeof !report.confirmed == "boolean")
  report.confirmed = false;
  const db = await connectDB();
  return db.collection("Reports").insertOne(report);
}

export async function getRiddelById(id) {
  const db = await connectDB();
  return db.collection("Reports").findOne({ _id: id });
}

export async function updateRiddelById(id, product) {
  const db = await connectDB();
  return db.collection("Reports").updateOne({ _id: new ObjectId(id) },
  { $set: product });
}

export async function deleteRiddleById(id) {
  const db = await connectDB();
  return db.collection("Reports").deleteOne({ _id: new ObjectId(id) });
}