import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ProfileLinks = ({ profile }) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
      {/* Twitter Card */}

      <a
        href={
          profile.twitter_username
            ? `https://twitter.com/${profile.twitter_username}`
            : "#"
        }
        target="_blank"
        rel="noreferrer"
        className={`
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-cyan-500/20
          bg-white/5
          px-6
          py-5
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-cyan-400
          hover:shadow-[0_0_35px_rgba(34,211,238,.35)]
          ${
            !profile.twitter_username
              ? "pointer-events-none opacity-60"
              : ""
          }
        `}
      >
        {/* Glow */}
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="relative z-10 flex items-center gap-5">
          {/* Icon */}
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-cyan-500
              to-blue-600
              shadow-lg
            "
          >
            <FaXTwitter className="text-2xl text-white" />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Twitter
            </p>

            <h3 className="mt-1 text-lg font-semibold text-white">
              {profile.twitter_username || "Not Available"}
            </h3>
          </div>
        </div>
      </a>

      {/* GitHub Card */}

      <a
        href={profile.html_url}
        target="_blank"
        rel="noreferrer"
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-violet-500/20
          bg-white/5
          px-6
          py-5
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-violet-400
          hover:shadow-[0_0_35px_rgba(139,92,246,.35)]
        "
      >
        {/* Glow */}
        <div className="absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl"></div>

        <div className="relative z-10 flex items-center gap-5">
          {/* Icon */}
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-violet-600
              to-fuchsia-600
              shadow-lg
            "
          >
            <FaGithub className="text-2xl text-white" />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              GitHub
            </p>

            <h3 className="mt-1 text-lg font-semibold text-white">
              View Profile
            </h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProfileLinks;