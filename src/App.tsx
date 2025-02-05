import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";

import Countries from "./pages/Countries";
import CountryDetail from "./pages/CountryDetail";
import PageNotFound from "./pages/PageNotFound";
import { CountriesProvider } from "./context/CountriesContext";

function App() {
  return (
    <CountriesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="countries" />} />
            <Route path="countries" element={<Countries />} />
            <Route path="countries/:countryName" element={<CountryDetail />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CountriesProvider>
  );
}

export default App;
