import Navbar from "../components/Navbar"

function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <Navbar />

<section className="relative max-w-6xl mx-auto px-4 py-24">
        <div
  className="
    absolute
    inset-0
    -z-10
    overflow-hidden
  "
>
  <div
    className="
      w-[500px]
      h-[500px]
      bg-violet-600/20
      blur-3xl
      rounded-full
      absolute
      top-10
      left-1/2
      -translate-x-1/2
    "
  />
</div>

        <div className="text-center">

          <h1
            className="
              text-5xl
              md:text-7xl
              font-extrabold
              leading-tight
            "
          >
            Shorten Long Links,
            <br />

            <span className="text-violet-500">
              Share Everywhere 🚀
            </span>

          </h1>

          <p
            className="
              text-zinc-400
              text-lg
              mt-6
              max-w-2xl
              mx-auto
            "
          >
            Create short, powerful, and trackable links
            with analytics, expiration support,
            and custom aliases.
          </p>

        </div>

      </section>

    </div>
  )
}

export default HomePage