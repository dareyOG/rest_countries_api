import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Detail from './pages/Detail';
import AppLayout from './ui/AppLayout';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="detail" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
