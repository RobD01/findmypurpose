import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";

import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full md:flex flex-wrap">
      <LeftSidebar />
      <section className="flex flex-1 h-full ">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default RootLayout;
