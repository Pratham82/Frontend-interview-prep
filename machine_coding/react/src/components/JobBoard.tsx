import { useCallback, useEffect, useState } from 'react'

const JOB_IDS_URL = 'https://hacker-news.firebaseio.com/v0/jobstories.json'
const INDIVIDUAL_JOB_URL = 'https://hacker-news.firebaseio.com/v0/item/'

export default function JobBoard() {
  const [jobs, setJobs] = useState<string[] | null>([])
  const [isLoading, setIsLoading] = useState(false)
  const [fetchedJobsCount, setFetchedJobsCount] = useState(6)

  // fetch initial jobs
  const fetchJobs = useCallback(async () => {
    setIsLoading(true)
    try {
      const data = await fetch(JOB_IDS_URL)
      const res: string[] = await data.json()
      setIsLoading(false)
      setJobs(res)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchJobs()
  }, [fetchJobs])

  const handleLoadMore = () => {
    setFetchedJobsCount(p => p + 6)
  }

  return (
    <div
      style={{
        color: 'orange',
      }}
    >
      <h2>Hacker News Job Board</h2>
      <div>
        {jobs?.slice(0, fetchedJobsCount).map(job => (
          <JobBlock jobId={job} key={job} />
        ))}
      </div>
      <button
        style={{
          backgroundColor: 'orange',
        }}
        onClick={handleLoadMore}
      >
        {isLoading ? 'Loading Jobs...' : 'Load More '}
      </button>
    </div>
  )
}

interface IJobBlockProps {
  jobId: string
}
interface IJobDetails {
  by: string
  id: ''
  score: number
  time: number
  title: string
  type: string
  url: string
}
const JobBlock = (props: IJobBlockProps) => {
  const { jobId } = props
  const [jobDetails, setJobDetails] = useState<IJobDetails>({
    by: '',
    id: '',
    score: 0,
    time: 0,
    title: '',
    type: '',
    url: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const fetchJobData = useCallback(async () => {
    setIsLoading(true)
    try {
      const data = await fetch(`${INDIVIDUAL_JOB_URL}${jobId}.json`)
      const res = await data.json()
      setJobDetails(res)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [jobId])

  useEffect(() => {
    fetchJobData()
  }, [fetchJobData])

  if (isLoading) {
    return (
      <div
        style={{
          width: '400px',
          color: 'black',
          backgroundColor: 'white',
          padding: '10px',
          margin: '5px 0',
          borderRadius: '10px',
        }}
      >
        Loading...
      </div>
    )
  }

  return (
    <div
      style={{
        maxWidth: '400px',
        color: 'black',
        backgroundColor: 'white',
        padding: '10px',
        margin: '5px 0',
        borderRadius: '10px',
      }}
    >
      {jobDetails?.url ? (
        <a href={jobDetails?.url} target="_blank" style={{ color: 'inherit' }}>
          <span>{jobDetails?.title}</span>
        </a>
      ) : (
        <span>{jobDetails?.title}</span>
      )}
    </div>
  )
}
