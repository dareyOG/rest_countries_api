import { useCountries } from "../context/CountriesContext";
import Form from "../features/Form";
import Country from "../ui/Country";
import Loader from "../ui/Loader";

function Countries() {
  const { countries, isLoading } = useCountries();

  const sortedCountries = countries
    .slice()
    .sort((country1, country2) =>
      country1.name.common.localeCompare(country2.name.common),
    );

  return (
    <div className="px-12 py-16 md:px-24">
      <Form />
      {isLoading ? (
        <Loader />
      ) : (
        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[6rem]">
          {sortedCountries.map((country) => (
            <Country country={country} key={country.cca2} />
          ))}
        </section>
      )}
    </div>
  );
}

export default Countries;
