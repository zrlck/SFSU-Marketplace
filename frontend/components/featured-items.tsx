const items = [
  {
    title: "Modern Desk Lamp",
    description: "Adjustable LED lamp, perfect for late-night study sessions.",
    category: "Dorm Essentials",
    price: "$25",
    image: "/images/item-desk-lamp.jpg",
  },
  {
    title: "Calculus Textbook Bundle",
    description: "MATH 226 & 227 textbooks in great condition.",
    category: "Textbooks",
    price: "$40",
    image: "/images/item-textbooks.jpg",
  },
  {
    title: "Campus Backpack",
    description: "Water-resistant, fits a 15-inch laptop comfortably.",
    category: "Accessories",
    price: "$30",
    image: "/images/item-backpack.jpg",
  },
  {
    title: "Ergonomic Desk Chair",
    description: "Mesh back with lumbar support, barely used.",
    category: "Furniture",
    price: "$85",
    image: "/images/item-chair.jpg",
  },
  {
    title: "Scientific Calculator",
    description: "TI-84 Plus, ideal for engineering and math classes.",
    category: "Electronics",
    price: "$50",
    image: "/images/item-calculator.jpg",
  },
  {
    title: "Wireless Headphones",
    description: "Noise-cancelling, 30hr battery, great for the library.",
    category: "Electronics",
    price: "$65",
    image: "/images/item-headphones.jpg",
  },
];

export function FeaturedItems() {
  return (
    <section id="featured" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Marketplace
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Items
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Discover what fellow Gators are selling on campus.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="glass-card group cursor-pointer rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                  {item.price}
                </span>
              </div>

              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
