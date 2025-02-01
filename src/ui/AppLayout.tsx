import { Outlet } from "react-router-dom";

import Header from "./Header";

function AppLayout() {
  return (
    <div className="">
      <Header />
      <main className="bg-gray-50 px-[6rem]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
