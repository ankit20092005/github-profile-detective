import { CalendarDays } from "lucide-react";

import ProfileStats from "./ProfileStats";
import ProfileInfo from "./ProfileInfo";
import ProfileLinks from "./ProfileLinks";

const ProfileCard = ({ profile }) => {
  return (
    <div
      className="
      mt-14
      w-full
      max-w-6xl
      rounded-[35px]
      border
      border-violet-500/30
      bg-[#111735]/80
      p-8
      backdrop-blur-2xl
      shadow-[0_0_60px_rgba(139,92,246,.25)]
      transition-all
      duration-500
      hover:shadow-[0_0_80px_rgba(139,92,246,.45)]
      "
    >
      <div className="flex flex-col gap-10 lg:flex-row">

        {/* Avatar */}

        <div className="flex justify-center lg:block">

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-violet-500 blur-2xl opacity-40"></div>

            <img
              src={profile.avatar_url}
              alt={profile.login}
              className="
              relative
              z-10
              h-36
              w-36
              rounded-full
              border-[5px]
              border-violet-500
              object-cover
              shadow-[0_0_45px_rgba(139,92,246,.55)]
              "
            />

          </div>

        </div>

        {/* Right Side */}

        <div className="flex-1">

          {/* Name */}

          <div className="flex flex-col justify-between gap-6 lg:flex-row">

            <div>

              <h1 className="text-5xl font-extrabold tracking-wide">
                {profile.name || "No Name"}
              </h1>

              <a
                href={profile.html_url}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-xl text-blue-400 hover:text-violet-400"
              >
                @{profile.login}
              </a>

            </div>

            <div className="flex items-center gap-2 text-gray-300">

              <CalendarDays
                size={20}
                className="text-violet-400"
              />

              Joined{" "}
              {new Date(profile.created_at).toLocaleDateString()}

            </div>

          </div>

          {/* Bio */}

          <p className="mt-10 text-lg leading-8 text-gray-300">

            {profile.bio || "No bio available"}

          </p>

          {/* Stats */}

          <div className="mt-10">

            <ProfileStats profile={profile} />

          </div>

          {/* Info */}

          <div className="mt-8">

            <ProfileInfo profile={profile} />

          </div>

          {/* Buttons */}

          <div className="mt-8">

            <ProfileLinks profile={profile} />

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfileCard;