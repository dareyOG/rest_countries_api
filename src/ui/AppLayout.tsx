import { Outlet } from 'react-router-dom';
import Header from './Header';

function AppLayout() {
  return (
    <div>
      <Header />
      appLayout
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
