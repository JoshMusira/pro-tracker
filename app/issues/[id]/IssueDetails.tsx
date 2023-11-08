import { Card } from "@radix-ui/themes";
import ReactMarkdown from 'react-markdown';
import { Issue } from '@prisma/client';

const IssueDetails = ({ issue }: { issue: Issue }) => {
    return (
        <div className="flex flex-col space-y-3 w-[70%]">
            <p className='text-xl text-gray-600'>{issue.title}</p>
            <div className="flex gap-5 items-center">
                <p className='text-green-600  border boarder-green-500 px-2 rounded-xl py-auto'>{issue.status}</p>
                <p>{issue.createdAt.toDateString()}</p>

            </div>
            <Card className="prose max-w-full min-h-9" mt="4">
                <ReactMarkdown>{issue.description}</ReactMarkdown>
            </Card>
        </div>
    )
}

export default IssueDetails