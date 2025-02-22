import { useCountries } from "../hooks/CustomHooks";
import SearchCountry from "../features/SearchCountry";
import Country from "../ui/Country";
import Loader from "../ui/Loader";
import SearchResult from "../ui/SearchResult";

function Countries() {
  const { isLoading, countries, query, region } = useCountries();

  const sortedCountries = countries?.sort((a, b) =>
    a.name.common.localeCompare(b.name.common),
  );

  return (
    <div className="min-h-screen px-[3rem] py-[4rem] md:px-[6rem]">
      <SearchCountry />

      {isLoading ? (
        <Loader />
      ) : (
        <section
          className={` ${query ? "" : "grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"} gap-[4.95rem]`}
        >
          {/* grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[6rem] */}
          {query || region !== "" ? (
            <SearchResult />
          ) : (
            sortedCountries.map((country) => (
              <Country country={country} key={country.cca2} />
            ))
          )}
        </section>
      )}
    </div>
  );
}

export default Countries;
