import { Link } from "react-router-dom";
import { useCountries, useTheme } from "../hooks/CustomHooks";

function Border({ border }: { border: string }) {
  const { countries } = useCountries();
  const { theme } = useTheme();

  // search border country
  const borderCountry = countries.find((country) => country.cca3 === border);

  return (
    <Link
      to={`/countries/${borderCountry?.name.common}`}
      className={`min-w-8 cursor-pointer rounded-[0.5rem] border border-transparent md:text-[1.5rem] ${theme === "light" ? "bg-white text-blue-100 hover:bg-gray-100 hover:text-white hover:shadow-blue-50 md:hover:bg-blue-50 md:hover:text-gray-50" : "bg-blue-50 text-gray-50 hover:bg-gray-50 hover:text-gray-100 hover:shadow-gray-50 md:hover:bg-gray-50 md:hover:text-blue-50"} px-6 py-2 text-[1rem] font-normal shadow-md transition-all duration-300 ease-in hover:shadow-2xl`}
    >
      {borderCountry?.name.common}
    </Link>
  );
}

export default Border;
