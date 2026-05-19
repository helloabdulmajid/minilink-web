import Navbar from "../components/Navbar"
import UrlForm from "../components/UrlForm"
import Footer from "../components/Footer"

function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <Navbar />

<section className="relative max-w-6xl mx-auto px-4 py-8">
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

  <div className="flex items-center justify-center gap-4 flex-wrap">

    <span
      className="
        bg-gradient-to-r
        from-violet-500
        to-purple-400
        bg-clip-text
        text-transparent
      "
    >
      Share Everywhere
    </span>

    <span className="text-6xl">
      🚀
    </span>

  </div>

</h1>

          <p
            className="
              text-zinc-400
              text-lg
              mt-6
              max-w-3xl
              mx-auto
            "
          >
            Create short, powerful, and trackable links
            with analytics, expiration support,
            and custom aliases.
          </p>
          <UrlForm />

        </div>

      </section>
      <Footer />

    </div>
  )
}

export default HomePage