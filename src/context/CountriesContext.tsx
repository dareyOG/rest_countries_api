import { createContext, useContext, useEffect, useState } from "react";
import { ContextType, Countries } from "../types";

const CountriesContext = createContext<ContextType | null>(null);

const baseURL = "https://restcountries.com/v3.1";

function CountriesProvider({ children }: { children: React.ReactNode }) {
  const [countries, setCountries] = useState<Countries>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function loadCountries() {
      setIsLoading(true);
      try {
        const countriesRes = await fetch(`${baseURL}/all`);
        const countriesData = await countriesRes.json();

        const sortedCountries = countriesData.sort(
          (
            country1: { name: { common: string } },
            country2: { name: { common: string } },
          ) => country1.name.common.localeCompare(country2.name.common),
        );

        setCountries(sortedCountries);
      } catch (error) {
        if (error) throw new Error("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    }
    loadCountries();
  }, []);

  return (
    <CountriesContext.Provider value={{ countries, isLoading }}>
      {children}
    </CountriesContext.Provider>
  );
}

function useCountries() {
  const context = useContext(CountriesContext);
  console.log(context);
  if (!context) throw new Error("context is out of scope");
  return context;
}

export { CountriesProvider, useCountries };
