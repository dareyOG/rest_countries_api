import { createContext, useEffect, useState } from "react";
import { ContextType } from "../types";

const CountriesContext = createContext<ContextType | null>(null);

const baseURL = "https://restcountries.com/v3.1";

function CountriesProvider({ children }: { children: React.ReactNode }) {
  const [countries, setCountries] = useState<Array<{}>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function loadCountries() {
      setIsLoading(true);
      try {
        const countriesRes = await fetch(`${baseURL}/all`);
        const countriesData = await countriesRes.json();
        setCountries(countriesData);
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

/* function useCountries() {
  const context = createContext(CountriesContext);
  console.log(context);
  if (!context) throw new Error("context is out of scope");
  return context;
} */

export { CountriesProvider, CountriesContext };
