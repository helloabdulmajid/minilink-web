import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import AnalyticsPage from "./pages/AnalyticsPage"

function App() {

  useEffect(() => {

    fetch("https://minilink-twtn.onrender.com/health")
      .catch(() => {})

  }, [])

  return (

    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/analytics"
        element={<AnalyticsPage />}
      />

    </Routes>

  )
}

export default App