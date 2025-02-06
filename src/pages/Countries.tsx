import Form from "../features/Form";
import { useCountries } from "../context/CountriesContext";
import Country from "../ui/Country";

function Countries() {
  const { countries } = useCountries();

  const sortedCountries = countries.sort((country1, country2) =>
    country1.name.common.localeCompare(country2.name.common),
  );

  return (
    <div className="px-[6rem] py-[4rem]">
      <Form />
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[6rem]">
        {sortedCountries.map((country) => (
          <Country country={country} key={country.name.common} />
        ))}
      </section>
    </div>
  );
}

export default Countries;
