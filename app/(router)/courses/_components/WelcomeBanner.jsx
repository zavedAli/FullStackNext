import React from "react";
import Image from "next/image";

function WelcomeBanner() {
  return (
    <div className="flex m-4 gap-5 items-center bg-white rounded-xl p-5">
      <Image src="/logo.svg" alt="logo" width={85} height={40} />
      <div>
        <h2 className="font-bold text-[27px]">
          Welcome to <span className="text-secondary">Unicourse</span>
        </h2>
        <h2 className="text-gray-500">
          explore, learn and build all real life projects
        </h2>
      </div>
    </div>
  );
}

export default WelcomeBanner;
