import { Outlet } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <Main>
      <Header />
      <>
        <Outlet />
      </>
    </Main>
  );
}

export default AppLayout;
