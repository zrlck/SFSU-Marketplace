"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  {
    title: "Campus Backpack",
    description: "Water-resistant, fits a 15-inch laptop comfortably.",
    category: "Accessories",
    price: "$30",
    image: "/images/item-backpack.jpg",
  },
  {
    title: "Calculus Textbook Bundle",
    description: "MATH 226 & 227 textbooks in great condition.",
    category: "Textbooks",
    price: "$40",
    image: "/images/item-textbooks.jpg",
  },
  {
    title: "LED Desk Lamp",
    description: "Adjustable brightness, USB charging. Great for late study sessions.",
    category: "Dorm Essentials",
    price: "$25",
    image: "/images/item-desk-lamp.jpg",
  },
  {
    title: "TI-84 Calculator",
    description: "Ideal for engineering and math classes. Comes with cover.",
    category: "Electronics",
    price: "$50",
    image: "/images/item-calculator.jpg",
  },
  {
    title: "Sony Headphones",
    description: "Noise-cancelling, 30hr battery, great for the library.",
    category: "Electronics",
    price: "$65",
    image: "/images/item-headphones.jpg",
  },
  {
    title: "Ergonomic Desk Chair",
    description: "Mesh back with lumbar support, barely used. Moving out sale.",
    category: "Furniture",
    price: "$85",
    image: "/images/item-chair.jpg",
  },
];

function ItemCard({
  item,
  index,
}: {
  item: (typeof items)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`glass-card group cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        {/* Price tag */}
        <span className="absolute bottom-3 right-3 rounded-xl bg-primary/90 px-3 py-1 text-xs font-bold text-primary-foreground backdrop-blur-sm">
          {item.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3 inline-flex rounded-lg bg-secondary/10 px-2.5 py-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary">
            {item.category}
          </span>
        </div>
        <h3 className="mb-1.5 text-base font-semibold text-foreground transition-colors group-hover:text-primary">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export function FeaturedItems() {
  return (
    <section id="featured" className="relative py-24 sm:py-32">
      {/* Subtle top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Marketplace
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Featured Items
          </h2>
          <p className="mx-auto max-w-md text-pretty text-muted-foreground">
            Discover what fellow Gators are selling on campus.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <ItemCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            View all items
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
