"use client";
import {
  ListBulletIcon,
  ChartPieIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/24/outline";
//import BullseyePointer from "./bullseye-mousepointer-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: ChartPieIcon },
  {
    name: "Total Hits",
    href: "/dashboard/total-hits",
    icon: CursorArrowRippleIcon,
  },
  { name: "Details", href: "/dashboard/details", icon: ListBulletIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "text-lg font-medium hover:text-white flex justify-start items-center gap-2 pl-2 hover:bg-[#7A20FF] pt-2 pb-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ",
              {
                "bg-[#7A20FF] text-white": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
