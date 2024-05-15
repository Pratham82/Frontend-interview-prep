import { useState, useEffect, useRef } from 'react'
import Loader from './Loader'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/posts'

export default function InfiniteScroll() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const observerTarget = useRef(null)

  // * Fetch data and update the
  const getData = async (pageNumber: number) => {
    try {
      const res = await axios.get(URL, {
        params: {
          _page: String(pageNumber),
          _limit: '10',
        },
      })
      const result = res.data
      setData(prevData => [...new Set([...prevData, ...result])])
      setCurrentPage(prevPage => prevPage + 1)
    } catch (error) {
      console.log(error)
    }
  }

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      getData(currentPage)
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(handleObserver, options)

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
    }
  }, [currentPage])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {data.map(({ id, title, body }) => (
        <div
          style={{
            padding: '30px 20px',
            border: '1px solid red',
            maxWidth: '50%',
          }}
          key={id}
        >
          <b>
            {id} - {title}
          </b>
          <p>{body}</p>
        </div>
      ))}
      <div ref={observerTarget}>
        <Loader />
      </div>
    </div>
  )
}
