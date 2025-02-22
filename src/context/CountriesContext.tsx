import { createContext, useState } from "react";
import { CountriesContextType } from "../types";
import { useGetCountries } from "../hooks/CustomHooks";

const CountriesContext = createContext<CountriesContextType | null>(null);

function CountriesProvider({ children }: { children: React.ReactNode }) {
  const { data: countries, isError, isLoading } = useGetCountries();
  const [query, setQuery] = useState<string>("");

  return (
    <CountriesContext.Provider
      value={{ countries, isLoading, isError, query, setQuery }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export { CountriesProvider, CountriesContext };
