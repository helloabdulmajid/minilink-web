function Footer() {
  return (

    <footer
      className="
        border-t
        border-zinc-800
        mt-24
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          py-8
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        "
      >

        <div>

          <h2 className="text-xl font-bold text-white">
            MiniLink
          </h2>

          <p className="text-zinc-500 text-sm mt-1">
            Simple and powerful URL shortener
          </p>

        </div>

        <div
          className="
            flex
            items-center
            gap-6
            text-sm
            text-zinc-400
          "
        >

          <a
            href="https://github.com/helloabdulmajid/minilink-web"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-400 transition"
          >
            GitHub
          </a>

          <a
            href="/analytics"
            className="hover:text-violet-400 transition"
          >
            Analytics
          </a>

        </div>

      </div>

    </footer>

  )
}

export default Footer