import { useState } from "react"
import toast from "react-hot-toast"
import Navbar from "../components/Navbar"
import { getUrlAnalytics }
from "../api/shortUrlApi"

function AnalyticsPage() {

  const [shortCode, setShortCode] =
    useState("")

  const [analytics, setAnalytics] =
    useState(null)

  const [loading, setLoading] =
    useState(false)

  const handleFetchAnalytics =
    async (e) => {

      e.preventDefault()

      if (!shortCode.trim()) {

        toast.error(
          "Short code is required"
        )
    
        return
      }

      try {

        setLoading(true)

        const response =
          await getUrlAnalytics(
            shortCode
          )

        setAnalytics(response)

      } catch (err) {

        toast.error(
          err.response?.data?.message ||
          "Analytics not found"
        )

      } finally {

        setLoading(false)
      }
    }

  return (
   

    <div className="min-h-screen bg-zinc-950 text-white">
          <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-10">

        <h1
          className="
            text-4xl
            md:text-5xl
            font-bold
            mb-8
          "
        >
          URL Analytics 📊
        </h1>

        <form
          onSubmit={handleFetchAnalytics}
          className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-3xl
            p-6
            space-y-5
          "
        >

          <div>

            <label
              className="
                block
                text-sm
                text-zinc-400
                mb-2
              "
            >
              Enter Short Code
            </label>

            <input
              type="text"
              value={shortCode}
              onChange={(e) =>
                setShortCode(e.target.value)
              }
              placeholder="abc123"
              className="
                w-full
                bg-zinc-950
                border
                border-zinc-800
                rounded-2xl
                px-4
                py-3
                outline-none
                focus:border-violet-500
              "
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-gradient-to-r
              from-violet-600
              to-purple-500
              hover:from-violet-500
              hover:to-purple-400
              transition-all
              duration-300
              py-4
              rounded-2xl
              font-semibold
              text-lg
              disabled:opacity-50
            "
          >
            {
              loading
                ? "Fetching Analytics..."
                : "Get Analytics 🚀"
            }
          </button>

        </form>
        {
  analytics && (

    <div
      className="
        mt-8
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        p-6
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          mb-6
        "
      >
        Analytics Result 📈
      </h2>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
        "
      >

        <div
          className="
            bg-zinc-950
            rounded-2xl
            p-5
          "
        >
          <p className="text-zinc-500 text-sm">
            Original URL
          </p>

          <p
            className="
              mt-2
              break-all
            "
          >
            {analytics.originalUrl}
          </p>
        </div>

        <div
          className="
            bg-zinc-950
            rounded-2xl
            p-5
          "
        >
          <p className="text-zinc-500 text-sm">
            Short URL
          </p>

        <p
  className="
    mt-2
    text-violet-400
    break-all
  "
>

  {`http://localhost:8080/${analytics.shortCode}`}
  
  
</p>
        </div>

        <div
          className="
            bg-zinc-950
            rounded-2xl
            p-5
          "
        >
          <p className="text-zinc-500 text-sm">
            Click Count
          </p>

          <p
            className="
              mt-2
              text-3xl
              font-bold
            "
          >
            {analytics.clickCount}
          </p>
        </div>

        <div
          className="
            bg-zinc-950
            rounded-2xl
            p-5
          "
        >
          <p className="text-zinc-500 text-sm">
            Expiration
          </p>

          <p className="mt-2">

            {
              analytics.expiresAt
                ? analytics.expiresAt
                : "Permanent Link"
            }

          </p>
        </div>

      </div>

    </div>

  )
}

      </div>

    </div>
  )
}

export default AnalyticsPage