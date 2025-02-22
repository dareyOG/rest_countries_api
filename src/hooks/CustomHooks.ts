import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import { CountriesContext } from "../context/CountriesContext";
import { useQuery } from "@tanstack/react-query";
import { loadCountries } from "../services/apiCountries";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("context is out of scope");
  return context;
}

export function useCountries() {
  const context = useContext(CountriesContext);
  if (!context) throw new Error("context is out of scope");
  return context;
}

export function useGetCountries() {
  return useQuery({ queryKey: ["countries"], queryFn: loadCountries });
}
