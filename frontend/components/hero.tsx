export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image (video placeholder) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        {/* Additional blur layer */}
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-secondary" />
          <span className="text-xs font-medium text-muted-foreground">
            San Francisco State University
          </span>
        </div>

        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          GatorsList
        </h1>

        <p className="mt-4 text-pretty text-lg font-medium text-muted-foreground sm:text-xl">
          The student marketplace for San Francisco State University.
        </p>

        <p className="mt-2 text-pretty text-base text-muted-foreground/70 sm:text-lg">
          Buy, sell, donate, and trade with fellow Gators.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#featured"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <span className="relative z-10">Browse Items</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>

          <a
            href="#"
            className="glass inline-flex items-center justify-center rounded-2xl px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-foreground/5"
          >
            Post an Item
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
