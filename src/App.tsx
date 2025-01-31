import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Homepage from './pages/Homepage';
import Detail from './pages/Detail';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Homepage />} />
          <Route path="detail" element={<Detail />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
