import Link from "next/link";

import { Container } from "./Container";

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-indigo-600 dark:text-white dark:hover:text-indigo-200"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-1">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-slate-700">
                <NavLink href="/#projects">Projects</NavLink>
                <NavLink href="/#code">Some Code</NavLink>
                <NavLink href="/#ui-components">UI Components</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Sergio Valbuena. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}
