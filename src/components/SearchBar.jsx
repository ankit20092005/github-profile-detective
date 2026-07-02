import { Search } from "lucide-react";

const SearchBar = ({
  username,
  setUsername,
  handleSubmit,
  loading,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 flex w-full max-w-5xl flex-col gap-5 sm:flex-row"
    >
      {/* Search Box */}
      <div
        className="
        group
        flex
        flex-1
        items-center
        rounded-3xl
        border
        border-violet-500/40
        bg-[#111735]/70
        px-4
        py-3
        backdrop-blur-xl
        shadow-[0_0_35px_rgba(139,92,246,.15)]
        transition-all
        duration-300
        hover:border-violet-400
        hover:shadow-[0_0_45px_rgba(139,92,246,.35)]
      "
      >
        {/* Icon Circle */}
        <div
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#1A214A]
          shadow-inner
        "
        >
          <Search className="h-6 w-6 text-violet-400" />
        </div>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search GitHub Username..."
          className="
            ml-4
            w-full
            bg-transparent
            text-lg
            text-white
            placeholder:text-gray-400
            outline-none
          "
        />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        disabled={loading}
        className="
          rounded-3xl
          bg-gradient-to-r
          from-violet-600
          via-fuchsia-500
          to-blue-600
          px-10
          py-4
          text-lg
          font-bold
          text-white
          shadow-[0_0_35px_rgba(139,92,246,.45)]
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_55px_rgba(139,92,246,.75)]
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;