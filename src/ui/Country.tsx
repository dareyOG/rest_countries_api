import { Link } from "react-router-dom";
import { CountryProps } from "../types";
import { formatNumber } from "../utils/help";

function Country({ country }: { country: CountryProps }) {
  return (
    <Link to={`/countries/${country.name.common}`}>
      <div className="grid-rows-[auto, 1fr] grid w-auto cursor-pointer gap-8 rounded-[0.8rem] border border-transparent bg-white transition-all duration-300 md:shadow-[0_0_2.5px_0] md:shadow-gray-50 md:hover:shadow-[0_2px_10px_0] md:hover:shadow-gray-100">
        <img
          src={country.flags.svg}
          alt={`flag of ${country.altSpellings.at(1)}`}
          className="h-[16rem] w-full rounded-t-[0.8rem] object-cover"
        />
        <div className="grid-rows-[auto, 1fr] grid gap-8 px-10 pb-16 text-[1.4rem]">
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
              <span className="font-normal">{country.capital?.at(0)}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Country;
