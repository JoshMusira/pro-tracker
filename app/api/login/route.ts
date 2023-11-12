import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password } = body;

        const user = await prisma.user.findUnique({
            where: {
                username
            }
        })

        if (!user) {
            return NextResponse.json({ message: "User does not already exists." }, { status: 400 });
        }
        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({ message: "Invalid credentials." }, { status: 400 });
        }

        const tokenData = {
            id: user.id,
            username: user.username,
            email: user.email
        }

        const token = jwt.sign(tokenData, process.env.JWT_SECRET!, { expiresIn: "1d" })

        const response = NextResponse.json({
            message: "Login successful.",
            success: true,
        })


        response.cookies.set("token", token, {
            httpOnly: true,

        })

        return response

    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 })

    }

}