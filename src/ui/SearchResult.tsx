import { useEffect } from "react";
import { useCountries } from "../hooks/CustomHooks";
// import { CountryProps } from "../types";
import SearchedCountry from "./SearchedCountry";

function SearchResult() {
  const { countries, query, region, searchResult, setSearchResult } =
    useCountries();

  useEffect(() => {
    if (query !== "") {
      const results = countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase()),
      );
      setSearchResult(results);
    }
    if (region !== "") {
      const results = countries.filter((country) =>
        country.region.toLowerCase().includes(region.toLowerCase()),
      );
      setSearchResult(results);
    }
  }, [countries, query, region, setSearchResult]);

  return (
    <ul className="flex flex-wrap gap-[4.95rem]">
      {searchResult.map((result) => (
        <SearchedCountry resultCountry={result} key={result.cca2} />
      ))}
    </ul>
  );
}

export default SearchResult;
