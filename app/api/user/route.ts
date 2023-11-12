import { createUserSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


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


        const newUser = await prisma.user.create({
            data: {
                name: validation.data.name,
                username: validation.data.username,
                email: validation.data.email,
                password: validation.data.password
            }
        });

        return NextResponse.json(newUser, { status: 201 });

    } catch (error: any) {
        console.log(error.message);
    }

}