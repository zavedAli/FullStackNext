import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";

function Courses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2">
        <WelcomeBanner />
      </div>
      <div>Right Section</div>
    </div>
  );
}

export default Courses;
