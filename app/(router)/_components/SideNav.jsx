import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";
import React from "react";

function SideNav() {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
    },
    {
      id: 3,
      name: "Be instructor",
      icon: GraduationCap,
    },
  ];
  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <div className="flex justify-center items-center">
        <Image src="/logo.svg" alt="logo" width={85} height={40} />
      </div>

      <hr className="mt-7" />

      <div className="mt-8">
        {menu.map((item, index) => (
          <div
            className="group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-500 cursor-pointer 
          hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200"
          >
            <item.icon className="group-hover:animate-bounce" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
