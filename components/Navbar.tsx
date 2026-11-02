import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 my-2">
      <Container>
        <nav className="w-full flex justify-between items-center p-2 rounded-lg">
          <Link href={"/"} className="font-semibold">
            ccristiann
          </Link>
          <div className="flex items-center gap-x-2.5">
            <Link
              href={"/about"}
              className={buttonVariants({ variant: "ghost" })}
            >
              About
            </Link>
            <ThemeSwitcher />
          </div>
        </nav>
      </Container>
    </header>
  );
}
