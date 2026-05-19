function UrlForm() {
  return (
<>
   <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-24">

  <div className="md:col-span-2 ">
    <label className="block text-sm text-zinc-300 mb-2">
      Long URL
    </label>

    <input
      type="text"
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
  "
>
  Shorten URL 🚀
</button>
</>

  )
}

export default UrlForm