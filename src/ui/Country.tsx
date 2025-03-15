import { Link } from "react-router-dom";
import { formatNumber } from "../utils/help";
import { CountryProps } from "../types";

function Country({ country }: { country: CountryProps }) {
  return (
    <Link to={`/countries/${country.name.common.toLowerCase()}`}>
      <div className="flex w-[27rem] cursor-pointer flex-col gap-[2rem] rounded-[0.8rem] border border-transparent bg-white transition-all duration-500 dark:bg-blue-50 md:shadow-md md:hover:shadow-lg md:hover:shadow-gray-100 dark:md:hover:shadow-gray-100">
        <img
          src={country.flags.svg}
          alt={`flag of ${country.altSpellings}`}
          className="h-[15rem] min-w-full rounded-t-[0.8rem] object-cover"
        />
        <div className="flex flex-col gap-[1.5rem] px-[2.5rem] pb-[4rem] text-[1.3rem] dark:text-gray-50">
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
            <p className="flex space-x-2">
              <span>Capital:</span>
              <span className="font-normal">
                {country.capital?.join(", ") ?? `Not available`}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Country;
