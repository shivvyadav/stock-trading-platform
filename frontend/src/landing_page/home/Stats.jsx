import React from "react";

const Stats = () => {
  const stats = [
    {
      label: "Customer-first always",
      value:
        "That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments",
    },
    {
      label: "No spam or gimmicks",
      value:
        "No gimmicks, spam, 'gamification', or annoying push notifications. High quality apps that you use at your pace, the way you like.",
    },
    {
      label: "The Zerodha universe",
      value:
        "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
    },
    {
      label: "Do better with money",
      value:
        "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
    },
  ];

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-16 pt-36 text-center sm:justify-between sm:text-center md:flex-row">
      <div className="flex flex-col gap-10 px-6 text-left">
        <h1 className="text-xl md:text-2xl font-medium text-neutral-700 sm:text-3xl">
          Trust with confidence
        </h1>
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-[17px] font-medium text-neutral-800  md:text-xl">
              {stat.label}
            </h2>
            <p className="text-[15px] max-w-md pt-2 leading-7 text-neutral-500">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
      <div className="px-6">
        <img className="w-2xl" src="media/ecosystem.png" alt="Stats Image" />
        <div className="mt-6 flex justify-center gap-4 text-sm font-medium text-[#387ed1] sm:text-lg ">
          <a className="hover:text-neutral-700" href="">
            Explore our products <span>→</span>
          </a>
          <a className="hover:text-neutral-700" href="">
            Try Kite demo <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stats;
