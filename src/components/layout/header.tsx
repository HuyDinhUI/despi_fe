"use client";

import { Bell, Settings, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Avatar from "../ui/avatar";

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
    <header className="sticky z-999 top-0 w-full py-3 px-5 flex justify-between items-center text-gray-700 border-b border-gray-200 bg-white">
      <div className="relative z-2 font-bold text-[clamp(15px,5vw,25px)] font-sageffine flex gap-1 items-center">
        <Image src="/logo_despi.png" width={35} height={30} alt="logo despi"/>
        Despi
      </div>
      <nav className="mr-5 text-[clamp(10px,5vw,15px)] absolute right-0 left-0 flex justify-center z-1">
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
      <div className="flex items-center gap-2 relative z-2">
          <Button icon={<Bell size={20}/>} variant="icon" size="ic" />
          <Button icon={<Settings size={20}/>} variant="icon" size="ic" />
          <Button icon={<Sun size={20}/>} variant="icon" size="ic" />
          <Avatar src="/Gemini_Generated_Image_3bk1a73bk1a73bk1-removebg-preview.png" width={25} height={25} alt="avatar"/>
      </div>
    </header>
  );
};

export default Header;
