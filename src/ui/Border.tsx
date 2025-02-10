import { Link } from "react-router-dom";
import { useCountries } from "../context/CountriesContext";

function Border({ border }: { border: string }) {
  const { countries } = useCountries();

  // search border country
  const borderCountry = countries.find(
    (country) => country.alpha3Code === border,
  );

  console.log(borderCountry);

  return (
    <Link
      to={`/countries/${borderCountry?.name}`}
      className="w-auto cursor-pointer rounded-[0.25rem] border border-transparent bg-white px-6 py-2 text-blue-100 shadow-2xl transition-all duration-500 ease-in hover:bg-gray-100 hover:text-white hover:shadow-md hover:shadow-blue-50 md:hover:bg-blue-50 md:hover:text-gray-50"
    >
      {borderCountry?.name}
    </Link>
  );
}

export default Border;
