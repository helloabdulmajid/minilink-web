import { useState } from "react"
import { createShortUrl } from "../api/shortUrlApi"
function UrlForm() {

const [originalUrl, setOriginalUrl] = useState("")
const [customAlias, setCustomAlias] = useState("")
const [expiresAt, setExpiresAt] = useState("")
const [loading, setLoading] = useState(false)
const [shortUrlData, setShortUrlData] = useState(null)
const [error, setError] = useState("")

const [copied, setCopied] = useState(false)

const handleCopy = async () => {

    try {

        await navigator.clipboard.writeText(
            shortUrlData.shortUrl
        )

        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 2000)

    } catch (err) {

        console.log(err)

    }
}

const handleSubmit = async () => {

if (!originalUrl.trim()) {

    setShortUrlData(null)
    setError("URL is required")
    return
}

if (
    !originalUrl.startsWith("http://") &&
    !originalUrl.startsWith("https://")
) {

    setShortUrlData(null)
    setError("URL must start with http:// or https://")
    return
}
    try {

        setLoading(true)
        setError("")

       const payload = {
    originalUrl,
    customAlias: customAlias || null,
    expiresAt: expiresAt || null
}

        const response = await createShortUrl(payload)

        setShortUrlData(response)
        setOriginalUrl("")
      setCustomAlias("")
setExpiresAt("")

        console.log(response)

    } catch (err) {

        setError(
            err.response?.data?.message ||
            "Something went wrong"
        )

    } finally {

        setLoading(false)
    }
}
  return (
<>
   <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16 md:mt-24">

  <div className="md:col-span-2 ">
    <label className="block text-sm text-zinc-300 mb-2">
      Long URL
    </label>

    <input
      type="text"
  value={originalUrl}
  onChange={(e) => {
    setOriginalUrl(e.target.value)
    setError("")
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
  onClick={handleSubmit}
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
  "
>
  {loading ? "Creating..." : "Shorten URL 🚀"}
</button>

{
  shortUrlData && (

    <div
      className="
        mt-6
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-5
      "
    >

      <p className="text-zinc-400 text-sm">
        Short URL
      </p>

     <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-2">

  <a
    href={shortUrlData.shortUrl}
    target="_blank"
    rel="noreferrer"
    className="
      text-violet-400
      break-all
      hover:underline
    "
  >
    {shortUrlData.shortUrl}
  </a>

  <button
    onClick={handleCopy}
    className="
      bg-violet-600
      hover:bg-violet-500
      transition
      px-4
      py-2
      rounded-xl
      text-sm
      font-medium
      whitespace-nowrap
    "
  >
    {copied ? "Copied ✅" : "Copy 📋"}
  </button>

</div>

    </div>

  )
}
{
  error && (

    <p className="text-red-400 mt-4">
      {error}
    </p>

  )
}
</>

  )
}

export default UrlForm