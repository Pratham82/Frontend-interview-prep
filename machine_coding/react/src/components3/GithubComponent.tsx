import { useEffect, useState, useCallback } from "react"

const GITHUB_ACCESS_TOKEN = import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN
const GITHUB_API_BASE = "https://api.github.com/"

enum Sort {
  ASC = "asc",
  DESC = "desc",
}

type FetchGithubReposParams = {
  page: number
  per_page: number
  sort: string
  direction: "asc" | "desc"
}

type GitHubApiResponse = {
  message?: string
  documentation_url?: string
}

const fetchGithubRepos = async (props: FetchGithubReposParams) => {
  const { page = 1, direction = "asc", per_page = 10, sort = "created" } = props

  if (!GITHUB_ACCESS_TOKEN) {
    throw new Error("GitHub access token is not configured")
  }

  try {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: per_page.toString(),
      sort,
      direction,
    })

    const res = await fetch(`${GITHUB_API_BASE}user/repos?${params}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    })

    if (!res.ok) {
      const errorData: GitHubApiResponse = await res.json()
      throw new Error(`GitHub API error: ${res.status} - ${errorData.message}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    throw error
  }
}

import { GithubRepoItem } from "../types"

export default function GithubComponent() {
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState(Sort.ASC)
  const [repositories, setRepositories] = useState<GithubRepoItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Memoized fetch function to avoid recreation on every render
  const fetchData = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const data = await fetchGithubRepos({
        page,
        direction: sort,
        per_page: 5,
        sort: "created",
      })
      setRepositories(data || [])
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
      setError(errorMessage)
      setRepositories([])
    } finally {
      setIsLoading(false)
    }
  }, [page, sort])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // Handle page input with validation
  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numValue = parseInt(value, 10)

    if (value === "" || (!isNaN(numValue) && numValue > 0)) {
      setPage(value === "" ? 1 : numValue)
    }
  }

  // Handle pagination buttons with validation
  const handlePrevPage = () => {
    setPage(prev => Math.max(1, prev - 1))
  }

  const handleNextPage = () => {
    setPage(prev => prev + 1)
  }

  // Loading state
  if (isLoading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <p>Loading repositories...</p>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
        <p>Error: {error}</p>
        <button onClick={fetchData}>Retry</button>
      </div>
    )
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>GitHub Repositories</h2>

      {/* Sorting */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="sort-select" style={{ marginRight: "10px" }}>
          Sort Direction:
        </label>
        <select
          id="sort-select"
          onChange={e => setSort(e.target.value as Sort)}
          value={sort}
          style={{
            width: "150px",
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value={Sort.ASC}>Ascending</option>
          <option value={Sort.DESC}>Descending</option>
        </select>
      </div>

      {/* Listing */}
      {repositories.length > 0 ? (
        <ul style={{ width: "100%", padding: 0 }}>
          {repositories.map(repo => (
            <li
              key={repo.id}
              style={{
                listStyle: "none",
                padding: "15px 20px",
                margin: "10px 0",
                border: "1px solid #e1e5e9",
                borderRadius: "8px",
                backgroundColor: "#f8f9fa",
              }}
            >
              <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{repo.name}</div>
              {repo.description && (
                <div style={{ fontSize: "14px", color: "#666" }}>{repo.description}</div>
              )}
              <div style={{ fontSize: "12px", color: "#888", marginTop: "5px" }}>
                ⭐ {repo.stargazers_count} • 🍴 {repo.forks_count} • {repo.language}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No repositories found.</p>
      )}

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <button
          onClick={handlePrevPage}
          disabled={page <= 1}
          style={{
            padding: "8px 16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: page <= 1 ? "#f5f5f5" : "#fff",
            cursor: page <= 1 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>Page:</span>
          <input
            type="number"
            value={page}
            onChange={handlePageChange}
            min="1"
            style={{
              width: "60px",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              textAlign: "center",
            }}
          />
        </div>

        <button
          onClick={handleNextPage}
          disabled={repositories.length === 0}
          style={{
            padding: "8px 16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: repositories.length === 0 ? "#f5f5f5" : "#fff",
            cursor: repositories.length === 0 ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}
