"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVBAR_ITEMS = [
  {
    title: "Tarot",
    href: "/tarot",
  },
  {
    title: "Astrology",
    href: "/astrology",
  },
  {
    title: "Bazi",
    href: "/bazi",
  },
  {
    title: "Compatibility",
    href: "/compatibility",
  },
  {
    title: "Soulmate",
    href: "/soulmate",
  },
];

const Header = () => {
  const path = usePathname();
  return (
    <header className="fixed z-999 top-0 w-full py-3 px-5 flex justify-between items-center text-gray-700">
      <div className="font-bold text-[clamp(15px,5vw,25px)] font-sageffine">Despi</div>
      <nav className="mr-5 text-[clamp(15px,5vw,20px)] font-sageffine">
        <ol className="flex items-center gap-5">
          {NAVBAR_ITEMS.map((item) => (
            <li key={item.title}>
              <Link
                className={`hover:underline underline-offset-3 ${path.includes(item.href) ? "underline font-bold" : ""}`}
                href={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
};

export default Header;
