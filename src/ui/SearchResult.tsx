import { useEffect } from "react";

import SearchedCountry from "./SearchedCountry";
import { useCountries } from "../features/SearchCountry/useCountries";

function SearchResult() {
  const { countries, query, region } = useCountries();

  useEffect(() => {
    if (query !== "") {
      const results = countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase()),
      );
      // setSearchResult(results);
    }
    if (region !== "all") {
      const results = countries.filter((country) =>
        country.region.toLowerCase().includes(region.toLowerCase()),
      );
      // setSearchResult(results);
    }
  }, [countries, query, region]);

  return (
    <ul className="flex flex-wrap gap-[4.95rem]">
      {searchResult.map((result) => (
        <SearchedCountry resultCountry={result} key={result.cca2} />
      ))}
    </ul>
  );
}

export default SearchResult;
