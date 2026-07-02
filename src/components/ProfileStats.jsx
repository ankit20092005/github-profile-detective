import { FolderGit2, Users, UserPlus } from "lucide-react";

const stats = [
  {
    title: "Repositories",
    value: "public_repos",
    icon: FolderGit2,
    color: "text-violet-400",
  },
  {
    title: "Followers",
    value: "followers",
    icon: Users,
    color: "text-cyan-400",
  },
  {
    title: "Following",
    value: "following",
    icon: UserPlus,
    color: "text-pink-400",
  },
];

const ProfileStats = ({ profile }) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-violet-500/20
              bg-white/5
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-violet-400
              hover:shadow-[0_0_35px_rgba(139,92,246,.35)]
            "
          >
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl"></div>

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-400">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-extrabold text-white">
                  {profile[item.value]}
                </h2>
              </div>

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#1B224B]
                  shadow-inner
                "
              >
                <Icon className={`${item.color}`} size={28} />
              </div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="mt-6 h-[2px] rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500"></div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileStats;