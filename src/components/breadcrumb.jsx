import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ items, className = "" }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-sm ${className}`}
    >
      <Link
        href="/"
        className="flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200"
        aria-label="Home"
      >
        <Home className="h-4 w-4 mr-1" />
        Home
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
          {item.current || !item.href ? (
            <span className="font-semibold text-orange-600" aria-current="page">
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
