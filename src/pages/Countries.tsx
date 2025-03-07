import { useSearchParams } from "react-router-dom";
import SearchCountry from "../features/SearchCountry/SearchCountry";
import { useCountries } from "../features/SearchCountry/useCountries";
import { CountryProps, RegionProps } from "../types";
import Country from "../ui/Country";
import Loader from "../ui/Loader";

function Countries() {
  const { isLoading, countries, query, region } = useCountries();
  const [searchParams] = useSearchParams();

  const regionSearch = searchParams.get("region");

  const sortedCountries = countries?.sort((a, b) =>
    a.name.common.localeCompare(b.name.common),
  );

  const filterSearch = sortedCountries?.filter((country) =>
    regionSearch === "all"
      ? sortedCountries
      : country?.region.toLowerCase().includes(regionSearch as RegionProps),
  );

  const matchedQuery = filterSearch?.filter((country) => {
    const startsWithQuery = country?.name.common
      .toLowerCase()
      .startsWith(query?.toLowerCase());

    const includeQuery = country?.name.common
      .toLowerCase()
      .includes(query?.toLowerCase());

    return startsWithQuery && includeQuery;
  });

  return (
    <>
      <SearchCountry />
      <>
        {isLoading && <Loader />}

        {(query || region) && (
          <section
            className={`${query && region ? "flex flex-wrap" : "grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"} gap-[4.95rem]`}
          >
            {matchedQuery?.map((country: CountryProps) => (
              <Country key={country.cca2} country={country} />
            ))}
          </section>
        )}
      </>
    </>
  );
}
export default Countries;
