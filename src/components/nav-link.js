import Link from "next/link";

export function NavLink({ children, href }) {
  return (
    <Link
      className="bg-primary-4 hover:bg-primary-5 text-gray-12 rounded-md px-2 font-medium py-1 text-sm"
      href={href}
    >
      {children}
    </Link>
  );
}
