import Form from "../features/Form";
import { useCountries } from "../context/CountriesContext";
import Country from "../ui/Country";

function Countries() {
  const { countries } = useCountries();
  return (
    <div>
      <Form />
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[6rem]">
        {countries.map((country) => (
          <Country country={country} key={country.alt} />
        ))}
        countries
      </section>
    </div>
  );
}

export default Countries;
