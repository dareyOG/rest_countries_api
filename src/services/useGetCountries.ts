import { useQuery } from "@tanstack/react-query";

async function loadCountries() {
  try {
    const countriesRes = await fetch(`https://restcountries.com/v3.1/all`);

    const countriesData = countriesRes.json();
    return countriesData;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}

export function getCountries() {
  return useQuery({ queryKey: ["country"], queryFn: loadCountries });
}
