import GithubSearch from "./components/GithubSearch";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#060816] via-[#0F172A] to-[#1A0B2E] text-white">

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Purple Glow */}
      <div className="absolute -top-40 -left-40 h-[550px] w-[550px] rounded-full bg-violet-600/30 blur-[180px]" />

      {/* Blue Glow */}
      <div className="absolute top-1/3 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Pink Glow */}
      <div className="absolute -bottom-44 -right-44 h-[550px] w-[550px] rounded-full bg-fuchsia-600/20 blur-[200px]" />

      {/* Small Floating Lights */}
      <div className="absolute left-[12%] top-[18%] h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_20px_#a855f7]" />
      <div className="absolute right-[18%] top-[30%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
      <div className="absolute left-[20%] bottom-[15%] h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_15px_#ec4899]" />
      <div className="absolute right-[30%] bottom-[20%] h-3 w-3 rounded-full bg-violet-300 shadow-[0_0_20px_#c084fc]" />

      {/* Main Content */}
      <div className="relative z-10">
        <GithubSearch />
      </div>
    </div>
  );
}

export default App;