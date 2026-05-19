function RecentLinks({
  links,
  handleCopy
}) {

  if (links.length === 0) {
    return null
  }

  return (

    <div className="mt-10">

      <h2
        className="
          text-xl
          font-semibold
          mb-5
        "
      >
        Recent Links
      </h2>

      <div className="space-y-4">

        {
          links.map((link) => (

            <div
              key={link.shortCode}
              className="
                bg-zinc-900/70
                border
                border-zinc-800
                rounded-2xl
                p-4
                flex
                flex-col
                md:flex-row
                md:items-center
                justify-between
                gap-4
              "
            >

              <div className="flex-1">

                <p
                  className="
                    text-zinc-500
                    text-xs
                    mb-1
                  "
                >
                  Original URL
                </p>

                <p
                  className="
                    text-zinc-300
                    text-sm
                    break-all
                  "
                >
                  {link.originalUrl}
                </p>

                <a
                  href={link.shortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-violet-400
                    hover:underline
                    text-sm
                    mt-2
                    inline-block
                    break-all
                  "
                >
                  {link.shortUrl}
                </a>

              </div>

              <button
                type="button"
                onClick={() => handleCopy(link.shortUrl)}
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
                Copy 📋
              </button>

            </div>

          ))
        }

      </div>

    </div>

  )
}

export default RecentLinks