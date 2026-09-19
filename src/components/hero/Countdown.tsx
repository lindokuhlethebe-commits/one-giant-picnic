"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="mt-16 grid grid-cols-4 gap-4 md:gap-8 text-center max-w-3xl mx-auto border-t-2 border-l-2 border-r-2 border-cream bg-charcoal/50 p-6 backdrop-blur-sm">
      <div className="flex flex-col border-r border-cream/30 pr-4 md:pr-8">
        <span className="font-heading text-4xl md:text-6xl font-bold text-terracotta">
          {timeLeft.days}
        </span>
        <span className="text-xs uppercase tracking-widest text-sand mt-2">Days</span>
      </div>
      <div className="flex flex-col border-r border-cream/30 pr-4 md:pr-8">
        <span className="font-heading text-4xl md:text-6xl font-bold text-terracotta">
          {timeLeft.hours}
        </span>
        <span className="text-xs uppercase tracking-widest text-sand mt-2">Hours</span>
      </div>
      <div className="flex flex-col border-r border-cream/30 pr-4 md:pr-8">
        <span className="font-heading text-4xl md:text-6xl font-bold text-terracotta">
          {timeLeft.minutes}
        </span>
        <span className="text-xs uppercase tracking-widest text-sand mt-2">Mins</span>
      </div>
      <div className="flex flex-col">
        <span className="font-heading text-4xl md:text-6xl font-bold text-terracotta">
          {timeLeft.seconds}
        </span>
        <span className="text-xs uppercase tracking-widest text-sand mt-2">Secs</span>
      </div>
    </div>
  );
}
