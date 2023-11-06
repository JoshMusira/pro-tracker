import { Card } from "@radix-ui/themes";
import ReactMarkdown from 'react-markdown';

const IssueDetails = () => {
    return (
        <div className="flex flex-col space-y-3 w-[70%]">
            <p className='text-xl text-gray-600'>Test</p>
            <div className="flex gap-5 items-center">
                <p className='text-green-600  border boarder-green-500 px-2 rounded-xl py-auto'>Open</p>
                <p>Mon Nov 06 2023</p>

            </div>
            <Card className="prose max-w-full min-h-9" mt="4">
                <ReactMarkdown>issuedescription</ReactMarkdown>
            </Card>
        </div>
    )
}

export default IssueDetails