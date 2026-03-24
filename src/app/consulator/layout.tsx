import Sidebar, { SidebarItem } from "@/src/components/layout/sidebar";
import {
  Dumbbell,
  History,
  PieChart,
  Pill,
  Sparkles,
  Star,
  Trees,
  User,
} from "lucide-react";

const SibebarItems: SidebarItem[] = [
  {
    type: "item",
    label: "Current Transit",
    icon: <Sparkles size={15} />,
    href: "/consulator/current",
  },
  {
    type: "item",
    label: "Past Reading",
    icon: <History size={15} />,
    href: "/consulator/past",
  },
  { type: "separator" },
  {
    type: "item",
    label: "Spiritual Profile",
    icon: <User size={15} />,
    subItems: [
      {
        type: "item",
        label: "Overview",
        href: "/consulator/spiritual/overview",
        icon: <PieChart size={15} />,
      },
      {
        type: "item",
        label: "Element",
        href: "/consulator/spiritual/element",
        icon: <Trees size={15} />,
      },
      {
        type: "item",
        label: "Astrology",
        href: "/consulator/spiritual/astrology",
        icon: <Star size={15} />,
      },
      {
        type: "item",
        label: "Strengths",
        href: "/consulator/spiritual/strengths",
        icon: <Dumbbell size={15} />,
      },
      {
        type: "item",
        label: "Weakness",
        href: "/consulator/spiritual/weakness",
        icon: <Pill size={15} />,
      },
    ],
  },
];
export default function ConsulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex">
        <Sidebar items={SibebarItems} />
        {children}
      </div>
    </main>
  );
}
