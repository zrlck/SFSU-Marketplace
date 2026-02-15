export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <span className="text-lg font-bold tracking-tight text-foreground">
            SFSU <span className="text-primary">GatorsList</span>
          </span>
          <span className="text-xs text-muted-foreground">
            Made for Gators, by Gators.
          </span>
        </div>

        <div className="flex items-center gap-6">
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
        </div>

        <span className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} GatorsList. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
