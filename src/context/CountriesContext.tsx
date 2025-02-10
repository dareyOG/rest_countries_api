import { createContext, useContext, useState } from "react";
import { ContextType } from "../types";
import { countries } from "../../public/data/data";

const CountriesContext = createContext<ContextType | null>(null);

// const baseURL = "https://restcountries.com/v3.1";

function CountriesProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, _setIsLoading] = useState(false);

  // console.log(countries);

  /*  useEffect(function () {
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
  }, []); */

  // search countries

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
