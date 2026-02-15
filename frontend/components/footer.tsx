export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        {/* Logo */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="text-lg font-bold text-foreground">
            SFSU <span className="text-primary">GatorsList</span>
          </span>
          <span className="text-xs text-muted-foreground">
            Made for Gators, by Gators.
          </span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground/60">
          <span className="text-secondary">&bull;</span>{" "}
          {new Date().getFullYear()} GatorsList
          <span className="text-secondary"> &bull;</span>
        </p>
      </div>
    </footer>
  );
}
