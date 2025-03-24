import { useSearchParams } from "react-router-dom";
import { useCountries } from "../features/SearchCountry/useCountries";
import SearchCountry from "../features/SearchCountry/SearchCountry";

import Country from "../ui/Country";
import Loader from "../ui/Loader";
import Pagination from "../ui/Pagination";

import { PAGE_SIZE } from "../utils/constants";
import { CountryProps, RegionProps } from "../types";

function Countries() {
  const { isLoading, countries, query, region } = useCountries();
  const [searchParams] = useSearchParams();

  // sort countries in order
  let sortedCountries = countries?.sort((a, b) =>
    a.name.common.localeCompare(b.name.common),
  );

  // console.log(sortedCountries);

  // get Region
  const regionSearch = searchParams.get("region");

  if (regionSearch !== "all")
    sortedCountries = sortedCountries?.filter((country) =>
      country?.region.toLowerCase().includes(regionSearch as RegionProps),
    );

  if (query)
    sortedCountries = sortedCountries?.filter((country) => {
      const startsWithQuery = country?.name.common
        .toLowerCase()
        .startsWith(query?.toLowerCase());

      const includeQuery = country?.name.common
        .toLowerCase()
        .includes(query?.toLowerCase());

      return startsWithQuery && includeQuery;
    });

  const queryResults = sortedCountries?.filter((country) =>
    country.name.common.toLowerCase().startsWith(query.toLowerCase()),
  );

  // Pagination
  const pages = Math.ceil(sortedCountries?.length / PAGE_SIZE);

  // console.log(pages);

  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const indexOfLastCountry = currentPage * PAGE_SIZE;
  const indexOfFirstCountry = indexOfLastCountry - PAGE_SIZE;

  const currentCountries = queryResults?.slice(
    indexOfFirstCountry,
    indexOfLastCountry,
  );

  return (
    <>
      <SearchCountry currentPage={currentPage} pages={pages} />
      <>
        {isLoading && <Loader />}

        {!isLoading && !queryResults?.length && (
          <p className="flex items-center justify-center text-[2rem] text-blue-200 dark:text-gray-50">
            {region === "all"
              ? `country ${query.toUpperCase()} not found`
              : `country ${query.toUpperCase()} not found in ${region.toUpperCase()}`}
            🚫
          </p>
        )}

        <section className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[4.95rem]">
          {currentCountries?.map((country: CountryProps) => (
            <Country key={country.cca2} country={country} />
          ))}
        </section>
      </>

      {currentCountries && queryResults.length && (
        <Pagination
          countriesCount={queryResults?.length}
          sortedCountries={sortedCountries}
          currentPage={currentPage}
        />
      )}
    </>
  );
}
export default Countries;
