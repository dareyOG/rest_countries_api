import { Link } from "react-router-dom";
import { useTheme } from "../hooks/CustomHooks";
import { formatNumber } from "../utils/help";
import { CountryProps } from "../types";

function Country({ country }: { country: CountryProps }) {
  const { theme } = useTheme();
  return (
    <Link to={`/countries/${country.name.common}`}>
      <div
        className={`flex w-auto cursor-pointer flex-col gap-[2rem] rounded-[0.8rem] border ${theme === "light" ? "bg-white md:hover:shadow-gray-100" : "bg-blue-50 md:hover:shadow-gray-100"} border-transparent transition-all duration-500 md:shadow-md md:hover:shadow-lg`}
      >
        <img
          src={country.flags.svg}
          alt={`flag of ${country.altSpellings}`}
          className="h-[15rem] min-w-full rounded-t-[0.8rem] object-cover"
        />
        <div
          className={`flex flex-col gap-[1.5rem] px-[2.5rem] pb-[4rem] text-[1.3rem] ${theme === "light" ? "" : "text-gray-50"}`}
        >
          <h1 className="font-bold">{country.name.common}</h1>
          <div className="font-semibold">
            <p className="space-x-2">
              <span>Population:</span>
              <span className="font-normal">
                {formatNumber(country.population)}
              </span>
            </p>
            <p className="space-x-2">
              <span>Region:</span>
              <span className="font-normal">{country.region}</span>
            </p>
            <p className="space-x-2">
              <span>Capital:</span>
              <span className="font-normal">{country.capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Country;
