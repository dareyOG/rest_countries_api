import { createContext, useState } from "react";
import { CountriesContextType, RegionProps } from "../types";
import { useGetCountries } from "../hooks/useGetCountries";

const CountriesContext = createContext<CountriesContextType | null>(null);

function CountriesProvider({ children }: { children: React.ReactNode }) {
  const { data: countries, isError, isLoading } = useGetCountries();
  const [query, setQuery] = useState<string>("");
  const [region, setRegion] = useState<RegionProps>("all");

  return (
    <CountriesContext.Provider
      value={{
        countries,
        isLoading,
        isError,
        query,
        region,
        setQuery,
        setRegion,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export { CountriesProvider, CountriesContext };
