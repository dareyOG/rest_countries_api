import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../services/apiCountries";

export function useGetCountry(name: string) {
  return useQuery({
    queryKey: ["country"],
    queryFn: () => getCountry(name),
  });
}
