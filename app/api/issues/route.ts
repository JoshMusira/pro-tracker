import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema } from "../../validationSchema";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    try {
        const newIssue = await prisma.issue.create({
            data: {
                title: validation.data.title,
                description: validation.data.description
            }
        });

        return NextResponse.json(newIssue, { status: 201 });
    } catch (error: any) {

        if (error.code === 'P2002' && error.meta.target === 'Issue_title_key') {

            return NextResponse.json({ error: "Issue with this title already exists." }, { status: 400 });
        } else {

            return NextResponse.json({ error: "An error occurred while creating the issue." }, { status: 500 });
        }
    }
}
