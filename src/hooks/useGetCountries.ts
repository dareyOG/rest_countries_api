import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/apiCountries";

export function useGetCountries() {
  return useQuery({ queryKey: ["countries"], queryFn: getCountries });
}
