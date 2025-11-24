import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-card/80 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-lg">
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
        >
          🏠 Current Layout
        </Link>
        <Link
          href="/demo"
          className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
        >
          🎮 Demo
        </Link>
        <Link
          href="/page-with-projects"
          className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
        >
          📁 Extended Layout
        </Link>
        <div className="h-4 w-px bg-border"></div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
