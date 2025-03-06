import SearchCountry from "../features/SearchCountry/SearchCountry";
import { useCountries } from "../features/SearchCountry/useCountries";
import { CountryProps } from "../types";
import Country from "../ui/Country";
import Loader from "../ui/Loader";

function Countries() {
  const { isLoading, countries, query, region } = useCountries();
  // const [searchResults, setSearchResults] = useState<CountriesProps>(countries);

  const sortedCountries = countries?.sort((a, b) =>
    a.name.common.localeCompare(b.name.common),
  );

  const querySearch = sortedCountries?.filter((country) =>
    country?.name.common?.toLowerCase().includes(query),
  );

  const filterSearch = sortedCountries?.filter((country) =>
    country?.region.toLowerCase().includes(region),
  );

  const filterQuerySearch = filterSearch?.filter((country) => {
    country.name.common.toLowerCase().includes(query);
  });

  return (
    <>
      <SearchCountry />
      <>
        {isLoading && <Loader />}

        {!isLoading && (
          <section
            className={`${query ? "flex flex-wrap" : "grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"} gap-[4.95rem]`}
          >
            {(query
              ? querySearch
              : region !== "all"
                ? filterSearch
                : !query && region === "all"
                  ? sortedCountries
                  : filterQuerySearch
            )?.map((country: CountryProps) => (
              <Country key={country.cca2} country={country} />
            ))}
          </section>
        )}
      </>
    </>
  );
}
export default Countries;
