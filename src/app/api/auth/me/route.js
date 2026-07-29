import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function GET(request) {
  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    await connectDB();

    const admin = await Admin.findById(decoded.id).select(
      "-password"
    );

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      admin,
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid Token",
      },
      {
        status: 401,
      }
    );
  }
}