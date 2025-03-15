import { useSearchParams } from "react-router-dom";
import SearchCountry from "../features/SearchCountry/SearchCountry";
import { useCountries } from "../features/SearchCountry/useCountries";
import { CountryProps, RegionProps } from "../types";
import Country from "../ui/Country";
import Loader from "../ui/Loader";
import Pagination from "../ui/Pagination";
import { PAGE_SIZE } from "../utils/constants";

function Countries() {
  const { isLoading, countries, query, region } = useCountries();
  const [searchParams] = useSearchParams();

  // sort countries in order
  let sortedCountries = countries?.sort((a, b) =>
    a.name.common.localeCompare(b.name.common),
  );

  // get region
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

  // data size
  // const countriesCount = filterSearch?.length;
  // const countriesCount = matchedQuery?.length;
  // const countriesCount = sortedCountries?.length;

  const isQueryFound = sortedCountries?.map((country) =>
    // country.region.includes(region) &&
    country.name.common.toLowerCase().startsWith(query.toLowerCase()),
  );

  // pagination
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const indexOfLastCountry = currentPage * PAGE_SIZE;
  const indexOfFirstCountry = indexOfLastCountry - PAGE_SIZE;

  const currentCountries = sortedCountries?.slice(
    indexOfFirstCountry,
    indexOfLastCountry,
  );

  // console.log(
  //   currentPage,
  //   sortedCountries?.length <= PAGE_SIZE ? "one page" : "multipage",
  //   currentCountries,
  // );

  return (
    <>
      <SearchCountry />
      <>
        {isLoading && <Loader />}

        {!isLoading && !isQueryFound?.length && (
          <p className="flex items-center justify-center text-[2rem] text-blue-200 dark:text-gray-50">
            {`country ${query.toUpperCase()} not found`}
            🚫
          </p>
        )}

        <section
          className={`${query && region ? "flex flex-wrap" : "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"} gap-[4.95rem]`}
        >
          {currentCountries?.map((country: CountryProps) => (
            <Country key={country.cca2} country={country} />
          ))}
        </section>
      </>

      {currentCountries && (
        <Pagination
          countriesCount={sortedCountries?.length}
          sortedCountries={sortedCountries}
        />
      )}
    </>
  );
}
export default Countries;

/*   const filterSearch = currentCountries?.filter((country) =>
    regionSearch === "all"
      ? sortedCountries
      : country?.region.toLowerCase().includes(regionSearch as RegionProps),
  ); */

/*   const matchedQuery = filterSearch?.filter((country) => {
    const startsWithQuery = country?.name.common
      .toLowerCase()
      .startsWith(query?.toLowerCase());

    const includeQuery = country?.name.common
      .toLowerCase()
      .includes(query?.toLowerCase());

    return startsWithQuery && includeQuery;
  }); */
