import { Link } from "react-router-dom";
import { useCountries } from "../context/CountriesContext";

function Border({ border }: { border: string }) {
  const { countries } = useCountries();

  // search border country
  const borderCountry = countries.find((country) => country.cca3 === border);

  return (
    <Link
      to={`/countries/${borderCountry?.name.common}`}
      className="w-auto cursor-pointer rounded-[0.25rem] border border-transparent bg-white px-6 py-2 text-blue-100 md:hover:bg-blue-50 md:hover:text-gray-50"
    >
      {borderCountry?.name.common}
    </Link>
  );
}

export default Border;
