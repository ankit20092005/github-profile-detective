import { useState } from "react";
import axios from "axios";
import { FaGithub } from "react-icons/fa";

import SearchBar from "./SearchBar";
import Loader from "./Loader";
import ProfileCard from "./ProfileCard";

const GithubSearch = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    try {
      setLoading(true);

      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );

      setProfile(data);
      setError("");
    } catch (err) {
      setProfile(null);
      setError("User Not Found!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center px-6 py-14">

      {/* Heading */}
      <div className="flex flex-col items-center">

        <div className="flex items-center gap-4">

          <div
            className="rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-4 shadow-[0_0_40px_rgba(139,92,246,.5)] " >
            <FaGithub className="text-[42px] text-white" />
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            <span className="text-white">GitHub </span>
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Profile
            </span>
            <span className="text-white"> Detective</span>
          </h1>
        </div>

        <p className="mt-5 text-center text-lg text-gray-400">
          Search any GitHub developer profile instantly
        </p>

        <div className="mt-6 h-[3px] w-80 rounded-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>

      </div>

      {/* Search */}
      <SearchBar
        username={username}
        setUsername={setUsername}
        handleSubmit={handleSubmit}
        loading={loading}
      />

      {/* Error */}
      {error && (
        <div
          className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/10 px-6 py-4 text-red-300 backdrop-blur-xl ">
          {error}
        </div>
      )}

      {/* Loader */}
      {loading && <Loader />}

      {/* Profile */}
      {!loading && profile && (
        <ProfileCard profile={profile} />
      )}
    </div>
  );
};

export default GithubSearch;