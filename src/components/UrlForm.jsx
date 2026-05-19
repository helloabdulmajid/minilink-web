import { useEffect, useState } from "react"
import { createShortUrl } from "../api/shortUrlApi"
import ResultCard from "./ResultCard"
import toast from "react-hot-toast"
import RecentLinks from "./RecentLinks"
function UrlForm() {

const [originalUrl, setOriginalUrl] = useState("")
const [customAlias, setCustomAlias] = useState("")
const [expiresAt, setExpiresAt] = useState("")
const [loading, setLoading] = useState(false)
const [shortUrlData, setShortUrlData] = useState(null)

const [copied, setCopied] = useState(false)
const [recentLinks, setRecentLinks] = useState(() => {

    const storedLinks =
        localStorage.getItem("recentLinks")

    return storedLinks
        ? JSON.parse(storedLinks)
        : []

})
useEffect(() => {

    localStorage.setItem(
        "recentLinks",
        JSON.stringify(recentLinks)
    )

}, [recentLinks])

const handleCopy = async (text) => {


    try {

        await navigator.clipboard.writeText(text)

        setCopied(true)

        toast.success("Copied to clipboard")

        setTimeout(() => {
            setCopied(false)
        }, 2000)

    } catch (err) {

        console.log(err)

    }
}
    const clearHistory = () => {

    setRecentLinks([])

    localStorage.removeItem(
        "recentLinks"
    )

    toast.success(
        "History cleared"
    )
}

const handleSubmit = async (e) => {

    e.preventDefault()

if (!originalUrl.trim()) {

    setShortUrlData(null)

    toast.error("URL is required")

    return
}

if (
    !originalUrl.startsWith("http://") &&
    !originalUrl.startsWith("https://")
) {

    setShortUrlData(null)

    toast.error(
        "URL must start with http:// or https://"
    )

    return
}

    try {

        setLoading(true)

        const payload = {
            originalUrl,
            customAlias: customAlias || null,
            expiresAt: expiresAt || null
        }

        const response = await createShortUrl(payload)
        toast.success("Short URL created successfully")

        setShortUrlData(response)
        setRecentLinks((prev) => [
    response,
    ...prev
])

        setOriginalUrl("")
        setCustomAlias("")
        setExpiresAt("")

        console.log(response)

    } catch (err) {

  toast.error(
    err.response?.data?.message ||
    "Something went wrong"
)

    } finally {

        setLoading(false)
    }
}
  return (
<form
  onSubmit={handleSubmit}
>
   <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16 md:mt-24">

  <div className="md:col-span-2 ">
    <label className="block text-sm text-zinc-300 mb-2">
      Long URL
    </label>

    <input
    autoFocus
      type="text"
  value={originalUrl}
onChange={(e) => {
    setOriginalUrl(e.target.value)
     setShortUrlData(null)
}}
      placeholder="https://example.com/very-long-url"
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
        transition
      "
    />
  </div>

  <div>
    <label className="block text-sm text-zinc-300 mb-2">
      Custom Alias
      <span className="text-zinc-600">
        {" "} (optional)
      </span>
    </label>

    <input
      type="text"
      value={customAlias}
onChange={(e) => setCustomAlias(e.target.value)}
      placeholder="github"
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
        transition
      "
    />
  </div>

  <div>
    <label className="block text-sm text-zinc-300 mb-2">
      Expiration
      <span className="text-zinc-600">
        {" "} (optional)
      </span>
    </label>

    <input
      type="datetime-local"
      value={expiresAt}
onChange={(e) => setExpiresAt(e.target.value)}
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
        transition
      "
    />

    <p className="text-xs text-zinc-500 mt-2">
      Leave empty for permanent link
    </p>
  </div>

</div>
<button
  type="submit"
  disabled={loading}
  className="
    mt-8
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
    shadow-lg
    shadow-violet-900/40
    hover:shadow-violet-700/50
    hover:scale-[1.01]
   disabled:opacity-50
disabled:cursor-not-allowed
disabled:scale-100
  "
>
 {loading ? "Generating Link..." : "Shorten URL 🚀"}
</button>

{
  shortUrlData && (

    <ResultCard
      shortUrlData={shortUrlData}
      copied={copied}
      handleCopy={handleCopy}
    />

  )
}
<RecentLinks
  links={recentLinks}
  handleCopy={handleCopy}
  clearHistory={clearHistory}
/>

</form>

  )
}

export default UrlForm