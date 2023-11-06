import prisma from '@/prisma/client'
import Link from 'next/link'
import Spinner from './components/Spinner'

const LatestIssues = async () => {
    const issues = await prisma.issue.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
    })


    return (
        <div className="flex flex-col space-y-3 w-[40%] shadow-sm shadow-slate-400 border border-slate-200 p-3 rounded-2xl">
            <h1 className='text-xl sm:text-2xl font-bold  text-red-600'> Latest Issues</h1>
            {issues ? issues.map((issue) => {
                return (
                    <div key={issue.id} className='flex space-y-2 flex-col pl-5 border-b border-gray-200 '>
                        <p className='text-xl text-gray-600'><Link href={`/issues/${issue.id}`}>{issue.title}</Link></p>
                        <p className='text-green-600 pb-2'>{issue.status}</p>

                    </div>
                )
            })
                : <Spinner />}




        </div>
    )
}

export default LatestIssues