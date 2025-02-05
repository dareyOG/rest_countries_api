import { Outlet } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
