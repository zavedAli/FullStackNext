import React from "react";
import { Search, BellDot } from "lucide-react";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="p-4 bg-white flex justify-between ">
      {/* search bar */}
      <div className="flex gap-2 border p-2 m-1 rounded-md">
        <Search className="h-5 w-5" />
        <input
          type="text"
          placeholder="Search courses"
          className="outline-none"
        />
      </div>

      {/* get started button */}
      <div className="flex items-center gap-4">
        <Button variant="secondary">
          <BellDot className="h-5 w-5 group-hover:animate-bounce text-gray-100" />
          Get started
        </Button>
      </div>
    </div>
  );
}

export default Header;
