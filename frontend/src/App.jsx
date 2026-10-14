import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // The proxy automatically maps this to http://127.0.0
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching data:", err)
        setLoading(false)
      })
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React + Flask Web Application</h1>
      {loading ? (
        <p>Loading data from backend...</p>
      ) : (
        <div>
          <p>Backend Message: <strong>{data?.message}</strong></p>
          <p>Status: {data?.status}</p>
        </div>
      )}
    </div>
  )
}

export default App
