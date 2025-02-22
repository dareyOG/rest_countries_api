import { createContext, useState } from "react";
import { CountriesContextType, CountryProps } from "../types";
import { useGetCountries } from "../hooks/CustomHooks";

const CountriesContext = createContext<CountriesContextType | null>(null);

function CountriesProvider({ children }: { children: React.ReactNode }) {
  const { data: countries, isError, isLoading } = useGetCountries();
  const [query, setQuery] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CountryProps[]>([]);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        isLoading,
        isError,
        query,
        region,
        searchResult,
        setQuery,
        setRegion,
        setSearchResult,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export { CountriesProvider, CountriesContext };
