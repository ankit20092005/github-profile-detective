import { LoaderCircle } from "lucide-react";

const Loader = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-5">

      {/* Glowing Circle */}
      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-violet-500/30 blur-xl"></div>

        {/* Spinner */}
        <LoaderCircle
          size={60}
          className="relative z-10 animate-spin text-violet-400"
        />

      </div>

      {/* Text */}
      <p className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-lg font-semibold text-transparent">
        Fetching GitHub Profile...
      </p>

    </div>
  );
};

export default Loader;