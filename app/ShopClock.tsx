"use client";

import { useEffect, useState } from "react";

// The screen's taskbar: Jaipur time and whether the shop is open (Mon–Sat, 10 AM – 8 PM).
const OPEN = 10;
const CLOSE = 20;
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function status(day: number, hour: number) {
  const workday = day >= 1 && day <= 6;
  if (workday && hour >= OPEN && hour < CLOSE) return { open: true, text: "Open until 8 PM" };
  if (workday && hour < OPEN) return { open: false, text: "Opens at 10 AM" };
  const next = day === 6 || day === 0 ? "Monday" : DAYS[day + 1];
  return { open: false, text: `Opens ${next}, 10 AM` };
}

function jaipurNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const hour = Number(get("hour"));
  const minute = get("minute");
  const clock = `${get("weekday")} ${hour % 12 || 12}:${minute} ${hour < 12 ? "AM" : "PM"}`;
  return { clock, ...status(day, hour) };
}

export default function ShopClock() {
  const [now, setNow] = useState<ReturnType<typeof jaipurNow> | null>(null);

  useEffect(() => {
    const tick = () => setNow(jaipurNow());
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="menubar" aria-live="polite">
      {now ? (
        <>
          <span>{now.clock} in Jaipur</span>
          <span className={now.open ? "state open" : "state"}>{now.text}</span>
        </>
      ) : (
        <span>Mon–Sat, 10 AM – 8 PM</span>
      )}
    </p>
  );
}
