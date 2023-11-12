import { createUserSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createUserSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    try {
        const userExists = await prisma.user.findUnique({
            where: {
                username: validation.data.username
            }
        })
        if (userExists) {
            return NextResponse.json({ message: "User with this username already exists." }, { status: 400 });
        }

        const hashedPassword = await bcryptjs.hash(validation.data.password, 10);


        const newUser = await prisma.user.create({
            data: {
                name: validation.data.name,
                username: validation.data.username,
                email: validation.data.email,
                password: hashedPassword
            }
        });

        return NextResponse.json({ message: "User created successful" }, { status: 201 });

    } catch (error: any) {

        return NextResponse.json({ error: "An error occurred while creating a user" }, { status: 500 });
    }

}