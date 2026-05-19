function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">

      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-white">
          MiniLink
        </h1>

      <a
  href="https://github.com/helloabdulmajid/minilink-web"
  target="_blank"
  rel="noreferrer"
  className="
    bg-violet-600
    hover:bg-violet-500
    transition
    px-5
    py-2
    rounded-xl
    text-sm
    font-medium
    text-white
  "
>
  GitHub
</a>

      </div>

    </nav>
  )
}

export default Navbar