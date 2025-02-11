import { createContext, useContext, useEffect, useState } from "react";
import { ContextType, Countries } from "../types";
// import { countriesData as data } from "../../public/data/data";

const CountriesContext = createContext<ContextType | null>(null);

function CountriesProvider({ children }: { children: React.ReactNode }) {
  const [countries, setCountries] = useState<Countries>([]);
  const [isLoading, setIsLoading] = useState(false);

  /*   useEffect(function () {
    async function loadCountries() {
      setIsLoading(true);
      try {
        const countriesRes = data;
        setCountries(countriesRes);
      } catch (error) {
        if (error) throw new Error("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    }
    loadCountries();
  }, []); */

  useEffect(
    function () {
      async function loadCountries() {
        setIsLoading(true);
        try {
          const countriesRes = await fetch(
            `https://restcountries.com/v3.1/all`,
          );
          const countriesData = countriesRes.json();
          setCountries(await countriesData);
        } catch (error) {
          if (error) throw new Error("Error fetching data");
        } finally {
          setIsLoading(false);
        }
      }
      loadCountries();
    },
    [setCountries, setIsLoading],
  );

  return (
    <CountriesContext.Provider value={{ countries, isLoading }}>
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
