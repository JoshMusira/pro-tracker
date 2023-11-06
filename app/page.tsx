import IssueProgress from './IssueProgress'
import LatestIssues from './LatestIssues'

export default function Home() {
  return (
    <div className="flex justify-between mx-auto w-[90%]">
      <IssueProgress />
      <LatestIssues />
    </div>
  )
}
