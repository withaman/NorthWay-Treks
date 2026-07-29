import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";

export async function POST(req) {
    console.log("✅ Login API Called");

    await connectDB();

    const { email, password } = await req.json();

    const admin = await Admin.findOne({ email });

    if (!admin) {

        return NextResponse.json(
            {
                success: false,
                message: "Invalid Email",
            },
            {
                status: 401,
            }
        );
    }

    const match = await bcrypt.compare(
        password,
        admin.password
    );

    if (!match) {

        return NextResponse.json(
            {
                success: false,
                message: "Invalid Password",
            },
            {
                status: 401,
            }
        );
    }

    const token = createToken(admin);

    const response = NextResponse.json({
        success: true,
    });

    response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    });

    return response;
}