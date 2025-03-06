import { useContext } from "react";
import { CountriesContext } from "../../context/CountriesContext";

export function useCountries() {
  const context = useContext(CountriesContext);
  if (!context) throw new Error("context is out of scope");
  return context;
}
