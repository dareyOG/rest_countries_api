import { Link } from "react-router-dom";
import { CountryProps } from "../types";
import { useCountries } from "../features/SearchCountry/useCountries";

function BorderCountry({ border }: { border: string }) {
  const { countries } = useCountries();

  // search border country
  const borderCountry = countries?.find((country: CountryProps) =>
    country.cca3.includes(border),
  );

  // console.log(borderCountry);

  return (
    <Link
      to={`/countries/${borderCountry?.name.common?.toLowerCase()}`}
      className="min-w-8 cursor-pointer rounded-[0.5rem] border border-transparent bg-white px-6 py-2 text-[1rem] font-normal text-blue-100 shadow-md transition-all duration-300 ease-in hover:bg-gray-100 hover:text-white hover:shadow-2xl hover:shadow-blue-50 dark:bg-blue-50 dark:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-100 dark:hover:shadow-gray-50 md:text-[1.5rem] md:hover:bg-blue-50 md:hover:text-gray-50 dark:md:hover:bg-gray-50 dark:md:hover:text-blue-50"
    >
      {borderCountry?.name.common}
    </Link>
  );
}

export default BorderCountry;
