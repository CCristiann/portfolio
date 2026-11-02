import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Container from "./Container";

// Aggiungi qui { href: "/blog", label: "Blog" } quando il blog sarà pronto.
const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-10 py-2 bg-background/80 backdrop-blur">
      <Container>
        <nav className="w-full flex justify-between items-center p-2 rounded-lg">
          <Link href={"/"} className="font-semibold">
            ccristiann
          </Link>
          <div className="flex items-center gap-x-2.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={buttonVariants({ variant: "ghost" })}
              >
                {link.label}
              </Link>
            ))}
            <ThemeSwitcher />
          </div>
        </nav>
      </Container>
    </header>
  );
}
