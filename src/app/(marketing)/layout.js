import Link from "next/link";
import { Logo } from "~/components/logo";
import { NavLink } from "~/components/nav-link";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto p-4 lg:p-8 gap-8 lg:gap-16 flex flex-col bg-gray-1 min-h-screen">
      <header className="flex items-start justify-between">
        <Link href="/" className="font-bold text-primary-9 text-2xl">
          <Logo className="h-8 w-8 lg:w-12 lg:h-12" />
        </Link>

        <nav className="flex gap-4">
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/download">Download</NavLink>
          <NavLink href="/sign-in">Sign in</NavLink>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="text-gray-11 text-sm">
        &#169; {new Date().getFullYear()} Streeq. All rights reserved.
      </footer>
    </div>
  );
}
