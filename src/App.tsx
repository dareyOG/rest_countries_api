import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";

import { CountriesProvider } from "./context/CountriesContext";
import { ThemeProvider } from "./context/ThemeContext";

import Countries from "./pages/Countries";
import CountryDetail from "./pages/CountryDetail";
import PageNotFound from "./pages/PageNotFound";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <CountriesProvider>
        <BrowserRouter>
          <ThemeProvider>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="countries" />} />
                <Route path="countries" element={<Countries />} />
                <Route
                  path="countries/:countryName"
                  element={<CountryDetail />}
                />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </CountriesProvider>
    </QueryClientProvider>
  );
}

export default App;
