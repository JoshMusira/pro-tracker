import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const IssuesPage = () => {
    return (
        <div>
            IssuesPage
            <Button><Link href={'issues/newIssue'}>New Issue</Link> </Button>
        </div>
    )
}

export default IssuesPage