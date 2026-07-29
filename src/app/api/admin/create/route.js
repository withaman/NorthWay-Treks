import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function GET() {
  await connectDB();

  const already = await Admin.findOne({
    email: "admin@gmail.com",
  });

  if (already) {
    return NextResponse.json({
      message: "Already Exists",
    });
  }

  const hash = await bcrypt.hash("12345678", 10);

  await Admin.create({
    name: "Admin",
    email: "admin@gmail.com",
    password: hash,
  });

  return NextResponse.json({
    message: "Admin Created",
  });
}