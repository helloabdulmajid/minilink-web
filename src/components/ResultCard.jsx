function ResultCard({
  shortUrlData,
  copied,
  handleCopy
}) {

  return (

    <div
      className="
        mt-8
        bg-zinc-900/80
        border
        border-zinc-800
        rounded-3xl
        p-6
        backdrop-blur-sm
      "
    >

      <div className="space-y-5">

        <div>

          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
            Original URL
          </p>

          <p
            className="
              text-zinc-300
              break-all
              text-sm
            "
          >
            {shortUrlData.originalUrl}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
            Short URL
          </p>

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              gap-4
              justify-between
            "
          >

            <a
              href={shortUrlData.shortUrl}
              target="_blank"
              rel="noreferrer"
              className="
                text-violet-400
                hover:text-violet-300
                break-all
                font-medium
                hover:underline
              "
            >
              {shortUrlData.shortUrl}
            </a>

            <button
              type="button"
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

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
            pt-2
          "
        >

          <div
            className="
              bg-zinc-950
              border
              border-zinc-800
              rounded-2xl
              p-4
            "
          >

            <p className="text-zinc-500 text-xs mb-1">
              Click Count
            </p>

            <p className="text-xl font-bold">
              {shortUrlData.clickCount}
            </p>

          </div>

          <div
            className="
              bg-zinc-950
              border
              border-zinc-800
              rounded-2xl
              p-4
            "
          >

            <p className="text-zinc-500 text-xs mb-1">
              Expiration
            </p>

            <p className="text-sm font-medium">
              {
                shortUrlData.expiresAt
                  ? shortUrlData.expiresAt
                  : "Permanent Link"
              }
            </p>

          </div>

        </div>

      </div>

    </div>

  )
}

export default ResultCard