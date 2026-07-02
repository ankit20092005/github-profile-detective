import { MapPin, Building2 } from "lucide-react";

const ProfileInfo = ({ profile }) => {
  const info = [
    {
      icon: MapPin,
      title: "Location",
      value: profile.location || "Not Available",
      color: "text-violet-400",
    },
    {
      icon: Building2,
      title: "Company",
      value: profile.company || "Not Available",
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
      {info.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              flex
              items-center
              gap-5
              rounded-3xl
              border
              border-violet-500/20
              bg-white/5
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-violet-400
              hover:shadow-[0_0_25px_rgba(139,92,246,.35)]
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#1B224B]
              "
            >
              <Icon size={28} className={item.color} />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-400">
                {item.title}
              </p>

              <h3 className="mt-1 text-lg font-semibold text-white break-words">
                {item.value}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileInfo;