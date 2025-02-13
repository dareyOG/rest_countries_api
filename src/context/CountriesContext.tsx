import { createContext, useContext } from "react";
import { ContextType } from "../types";
import { getCountries } from "../services/useGetCountries";

const CountriesContext = createContext<ContextType | null>(null);

function CountriesProvider({ children }: { children: React.ReactNode }) {
  const { data: countries, isError, isLoading } = getCountries();

  return (
    <CountriesContext.Provider value={{ countries, isLoading, isError }}>
      {children}
    </CountriesContext.Provider>
  );
}

function useCountries() {
  const context = useContext(CountriesContext);
  if (!context) throw new Error("context is out of scope");
  return context;
}

export { CountriesProvider, useCountries };
