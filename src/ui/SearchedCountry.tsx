import { Link } from "react-router-dom";
import { formatNumber } from "../utils/help";
import { CountryProps } from "../types";
import { useTheme } from "../features/ThemeEffect/useTheme";

function SearchedCountry({ resultCountry }: { resultCountry: CountryProps }) {
  const { theme } = useTheme();
  return (
    <Link to={`/countries/${resultCountry.name.common}`}>
      <div
        className={`flex w-[27rem] flex-col gap-[2rem] rounded-[0.8rem] border ${theme === "light" ? "bg-white md:hover:shadow-gray-100" : "bg-blue-50 md:hover:shadow-gray-100"} border-transparent transition-all duration-500 md:shadow-md md:hover:shadow-lg`}
      >
        <img
          src={resultCountry.flags.svg}
          alt={`flag of ${resultCountry.altSpellings}`}
          className="h-[15rem] min-w-full rounded-t-[0.8rem] object-cover"
        />
        <div
          className={`flex flex-col gap-[2rem] px-[2.5rem] pb-[4rem] text-[1.3rem] ${theme === "light" ? "" : "text-gray-50"}`}
        >
          <h1 className="font-bold">{resultCountry.name.common}</h1>
          <div className="font-semibold">
            <p className="space-x-2">
              <span>Population:</span>
              <span className="font-normal">
                {formatNumber(resultCountry.population)}
              </span>
            </p>
            <p className="space-x-2">
              <span>Region:</span>
              <span className="font-normal">{resultCountry.region}</span>
            </p>
            <p className="space-x-2">
              <span>Capital:</span>
              <span className="font-normal">{resultCountry.capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SearchedCountry;
