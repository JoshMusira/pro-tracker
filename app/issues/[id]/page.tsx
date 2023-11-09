import prisma from "@/prisma/client";
import EditIssue from "../editIssue/EditIssue";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";
import Spinner from "@/app/components/Spinner";


interface Props {
    params: { id: string };
}


const SingleIssueDetails = async ({ params }: Props) => {
    const fetchIssue = await prisma.issue.findUnique({
        where: { id: params.id }
    })
    // console.log(fetchIssue)

    if (!fetchIssue) notFound();

    return (
        <div className=" w-[80%] mx-auto  shadow-sm shadow-slate-100 p-10">
            {
                fetchIssue ? (
                    <div className="flex justify-between gap-4">
                        <IssueDetails issue={fetchIssue} />
                        <EditIssue issue={fetchIssue} />
                    </div>
                ) : <Spinner />
            }

        </div>
    )
}

export default SingleIssueDetails