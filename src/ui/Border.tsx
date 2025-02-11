import { Link } from "react-router-dom";
import { useCountries } from "../context/CountriesContext";

function Border({ border }: { border: string }) {
  const { countries } = useCountries();

  // search border country
  const borderCountry = countries.find((country) => country.cca3 === border);

  console.log(border);
  console.log(borderCountry);

  return (
    <Link
      to={`/countries/${borderCountry?.name.common}`}
      className="min-w-8 cursor-pointer rounded-[0.5rem] border border-transparent bg-white px-6 py-2 text-[1rem] text-blue-100 shadow-2xl transition-all duration-300 ease-in hover:bg-gray-100 hover:text-white hover:shadow-md hover:shadow-blue-50 md:hover:bg-blue-50 md:hover:text-gray-50"
    >
      {borderCountry?.name.common}
    </Link>
  );
}

export default Border;
