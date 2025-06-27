import { useEffect, useState } from "react";

export default function TodoFetch() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const fetcher = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await res.json();
      return jsonData.slice(0, 10); // limiting to 10 todos for simplicity
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      const fetchedData = await fetcher();
      setData(fetchedData);
    })();
  }, []);

  const handleDelete = (id) => {
    setData((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, title) => {
    setEditId(id);
    setEditText(title);
  };

  const handleSave = (id) => {
    setData((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title: editText } : todo))
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <div style={{ padding: "20px" }}>
      {data.map((todo) => (
        <div
          key={todo.id}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                style={{ flex: 1, marginRight: "10px", padding: "5px" }}
              />
              <button onClick={() => handleSave(todo.id)}>Save</button>
            </>
          ) : (
            <>
              <p style={{ flex: 1 }}>{todo.title}</p>
              <div>
                <button
                  onClick={() => handleEdit(todo.id, todo.title)}
                  style={{ marginRight: "10px" }}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
