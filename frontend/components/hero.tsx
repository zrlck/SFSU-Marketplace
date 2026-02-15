"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        {/* Subtle purple radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.12)_0%,_transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">
              San Francisco State University
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-balance text-6xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Gators
            <span className="text-primary">List</span>
          </h1>

          {/* Subheading */}
          <p className="mb-4 text-pretty text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            The student marketplace for San Francisco State University.
          </p>

          {/* Supporting text */}
          <p className="mx-auto mb-10 max-w-lg text-pretty text-sm text-muted-foreground/80 sm:text-base">
            Buy, sell, donate, and trade with fellow Gators.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#featured"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
            >
              <span className="relative z-10">Browse Items</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <a
              href="#"
              className="glass inline-flex items-center justify-center rounded-2xl px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-white/10"
            >
              Post an Item
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 transition-all delay-700 duration-1000 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <a
            href="#featured"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground/50 transition-colors hover:text-muted-foreground"
            aria-label="Scroll to featured items"
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Explore
            </span>
            <svg
              className="h-4 w-4 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
