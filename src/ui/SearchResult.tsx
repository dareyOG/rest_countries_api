import { useEffect, useState } from "react";
import { useCountries } from "../hooks/CustomHooks";
import { CountryProps } from "../types";
import SearchedCountry from "./SearchedCountry";

function SearchResult() {
  const [searchResult, setSearchResult] = useState<CountryProps[]>([]);
  const { countries, query } = useCountries();

  useEffect(() => {
    const results = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query),
    );
    setSearchResult(results);
  }, [countries, query, setSearchResult]);
  return (
    <ul className="flex flex-wrap gap-[4.95rem]">
      {searchResult.map((result) => (
        <SearchedCountry resultCountry={result} key={result.cca2} />
      ))}
    </ul>
  );
}

export default SearchResult;
