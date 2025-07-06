import { useEffect, useState } from "react"

const GITHUB_ACCESS_TOKEN = import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN
const GITHUB_API_BASE = "https://api.github.com/"

enum Sort {
  ASC = "asc",
  DESC = "desc",
}

type fetchGithubReposType = {
  page: number
  per_page: number
  sort: string
  direction: "asc" | "desc"
}

const fetchGithubRepos = async (props: fetchGithubReposType) => {
  const { page = 1, direction = "asc", per_page = 10, sort = "created" } = props
  try {
    const res = await fetch(
      `${GITHUB_API_BASE}user/repos?page=${page}&per_page=${per_page}&sort=${sort}&direction=${direction}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
        },
      }
    )
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

import { GithubRepoItem } from "../types"

export default function GithubComponent() {
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState(Sort.ASC)
  const [repositories, setRepositories] = useState<GithubRepoItem[]>([])
  // const [isLoading, setIsLoading] = useState(false)

  console.log("🚀 ~ GITHUB_ACCESS_TOKEN:", GITHUB_ACCESS_TOKEN)

  useEffect(() => {
    async function fetchData() {
      const data = await fetchGithubRepos({
        page: page,
        direction: sort,
        per_page: 5,
        sort: "created",
      })
      setRepositories(data)
    }
    fetchData()
  }, [page, sort])

  console.log({
    page,
  })

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Github Component</h2>
      {/* Sorting */}
      <select
        name=""
        id=""
        onChange={e => setSort(e.target.value as Sort)}
        value={sort}
        style={{
          width: "max-content",
        }}
      >
        <option value={Sort.ASC}>Ascending</option>
        <option value={Sort.DESC}>Descending</option>
      </select>

      {/* Listing */}
      {repositories?.length > 0 ? (
        <ul>
          {repositories.map(repo => {
            return (
              <li
                key={repo.id}
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                }}
              >
                {repo.name}
              </li>
            )
          })}
        </ul>
      ) : null}

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        <button onClick={() => setPage(page => page - 1)}>Prev</button>
        <input
          type="text"
          value={page}
          onChange={e => setPage(e.target.value)}
          style={{
            width: "fit-content",
          }}
        />
        <button onClick={() => setPage(page => page + 1)}>Next</button>
      </div>
    </div>
  )
}
