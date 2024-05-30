import { useCallback, useEffect, useState } from 'react'

export default function TodoList() {
  const [data, setData] = useState([])
  const fetchData = useCallback(async () => {
    try {
      const data = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      )
      const res = await data.json()
      setData(res.map(el => ({ ...el, completed: false })))
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleToggleChange = index => {
    const modfiedTodos = [...data]
    modfiedTodos[index] = {
      ...modfiedTodos[index],
      completed: !modfiedTodos[index]?.completed,
    }
    setData(modfiedTodos)
  }

  const handleDeleteTodo = index => {
    setData(prevData => prevData.filter((el, i) => index !== i))
  }

  console.log({ data })

  return (
    <div>
      <h1>TodoList</h1>
      {data &&
        data.map((task, i) => (
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              checked={task?.completed}
              onChange={() => handleToggleChange(i)}
            />
            <span
              style={{
                textDecoration: task?.completed ? 'line-through' : 'none',
                margin: '0 8px',
                fontSize: '18px',
              }}
            >
              {task?.title}
            </span>
            <button onClick={() => handleDeleteTodo(i)}>Del</button>
          </div>
        ))}
    </div>
  )
}
