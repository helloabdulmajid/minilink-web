function UrlForm() {
  return (

    <div
      className="
        mt-16
        bg-zinc-900/60
        border
        border-zinc-800
        backdrop-blur-xl
        rounded-3xl
        p-6
        md:p-8
        shadow-2xl
      "
    >

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <input
          type="text"
          placeholder="Enter your long URL..."
          className="
            md:col-span-2
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

        <input
          type="text"
          placeholder="Custom alias (optional)"
          className="
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

        <input
          type="datetime-local"
          className="
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

      <button
        className="
          mt-6
          w-full
          bg-violet-600
          hover:bg-violet-500
          transition
          py-4
          rounded-2xl
          font-semibold
          text-lg
        "
      >
        Shorten URL 🚀
      </button>

    </div>
  )
}

export default UrlForm