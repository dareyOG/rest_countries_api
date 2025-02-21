import { createContext, useContext, useState } from "react";
import { ContextType, ThemeProps } from "../types";
import { getCountries } from "../services/useGetCountries";

const CountriesContext = createContext<ContextType | null>(null);

function CountriesProvider({ children }: { children: React.ReactNode }) {
  const { data: countries, isError, isLoading } = getCountries();
  const [theme, setTheme] = useState<ThemeProps>("light");

  const handleToggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <CountriesContext.Provider
      value={{ countries, isLoading, isError, theme, handleToggleTheme }}
    >
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
