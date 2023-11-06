import prisma from "@/prisma/client";
import EditIssue from "../editIssue/EditIssue";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";


interface Props {
    params: { id: string };
}
const SingleIssueDetails = async ({ params }: Props) => {
    const fetchIssue = await prisma.issue.findUnique({
        where: { id: params.id }
    })
    console.log(fetchIssue)

    if (!fetchIssue) notFound();

    return (
        <div className="flex justify-between gap-4 w-[80%] mx-auto">
            <IssueDetails />
            <EditIssue />
        </div>
    )
}

export default SingleIssueDetails