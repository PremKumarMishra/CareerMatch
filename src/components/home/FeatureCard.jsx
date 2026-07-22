import React from "react";

const FeatureCard = ({ icon: Icon, target, features, onClick }) => {
  const isInteractive = typeof onClick === "function";

  return (
    <div
      className={`"flex flex-col bg-linear-to-br from-[#1e293b] via-[#111827] to-[#0b1220] border border-white/10 transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-[0px_10px_30px_rgba(16,185,129,0.15)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-2xl gap-3 px-5 py-3 focus-visible:outline-2 focus-visible:outline-emerald-500" ${isInteractive ? "cursor-pointer" : ""}`}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={onClick}
    >
      <div className="flex justify-start gap-4 text-slate-200 font-semibold text-lg items-center">
        {Icon && (
          <Icon
            className="text-emerald-400 shrink-0"
            size={22}
            aria-hidden="true"
          />
        )}
        <h4>{target}</h4>
      </div>
      <ul className="text-slate-400 flex flex-col gap-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex flex-row items-start gap-2">
            <span className="text-emerald-400" aria-hidden="true">
              •
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
