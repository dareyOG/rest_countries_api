import { useNavigate, useParams } from "react-router-dom";
import { useCountries, useTheme } from "../hooks/CustomHooks";

import Border from "../ui/Border";

import { formatNumber } from "../utils/help";
import { HiArrowLongLeft } from "react-icons/hi2";

function CountryDetail() {
  const { countries } = useCountries();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { countryName } = useParams();

  // search country
  const country = countries?.find(
    (country) => country.name.common === countryName,
  );

  const handleClick = () => {
    navigate("/countries");
  };

  return (
    <section className="flex min-h-screen flex-col gap-[3rem] px-[3rem] py-[4rem] md:px-[6rem]">
      <button
        onClick={handleClick}
        className={`flex max-w-fit items-center gap-x-3 rounded-md ${theme === "light" ? "bg-gray-50 text-gray-100 hover:bg-gray-100 hover:text-gray-50 hover:shadow-gray-100" : "bg-blue-50 text-gray-50 hover:bg-gray-50 hover:text-blue-50"} px-[2rem] py-[0.5rem] shadow-md transition-all duration-300 ease-linear`}
      >
        <HiArrowLongLeft />
        <span className="text-[1.2rem] md:text-[1.5rem]">Back</span>
      </button>
      <div
        className={`flex flex-col lg:items-center lg:justify-center ${theme === "light" ? "" : "text-gray-50"} gap-[3.5rem] lg:flex-row lg:gap-[8rem]`}
      >
        <img
          src={country?.flags.svg}
          alt={`flag of ${country?.name.common}`}
          className="w-auto object-cover lg:max-h-[35rem] lg:max-w-[50rem]"
        />
        <div className="flex flex-col gap-[4.5rem] md:py-[3.5rem]">
          <h2 className="max-w-fit text-[2rem] font-bold md:text-[2.5rem] lg:text-start">
            {country?.name.common}
          </h2>
          <div className="flex flex-col gap-[3rem] text-nowrap text-[1.4rem] font-bold md:flex-row md:text-[1.8rem]">
            <div className="text-nowrap font-medium">
              <p className="space-x-4">
                <span>Native Name:</span>
                <span
                  className={`${theme === "light" ? "" : "text-gray-100"} font-normal`}
                >
                  {country?.name &&
                    country?.name &&
                    typeof country.name !== "string" &&
                    Object.values(Object.values(country.name)?.at(-1) || {})
                      ?.map((name) => name.common)
                      ?.at(0)}
                </span>
              </p>
              <p className="space-x-4">
                <span>Population:</span>
                <span
                  className={`${theme === "light" ? "" : "text-gray-100"} font-normal`}
                >
                  {formatNumber(country?.population as number)}
                </span>{" "}
              </p>
              <p className="space-x-4">
                <span> Region:</span>
                <span
                  className={`${theme === "light" ? "" : "text-gray-100"} font-normal`}
                >
                  {country?.region}
                </span>
              </p>
              <p className="space-x-4">
                <span>Sub Region:</span>
                <span
                  className={`${theme === "light" ? "" : "text-gray-100"} font-normal`}
                >
                  {country?.subregion}
                </span>
              </p>
              <p className="space-x-4">
                <span>Capital:</span>
                <span
                  className={`${theme === "light" ? "" : "text-gray-100"} font-normal`}
                >
                  {country?.capital.at(0)}
                </span>
              </p>
            </div>

            <div className="font-medium">
              <p className="space-x-4">
                <span> Top Level Domain:</span>
                <span
                  className={`${theme === "light" ? "" : "text-gray-100"} font-normal`}
                >
                  {country?.tld.at(0)}
                </span>
              </p>
              <p className="space-x-4">
                <span>Currencies: </span>
                <span
                  className={`${theme === "light" ? "" : "text-gray-100"} text-wrap font-normal`}
                >
                  {country?.currencies &&
                    Object.values(country.currencies)
                      .map((currency) => currency.name)
                      .join(", ")}
                </span>
              </p>
              <p className="space-x-4">
                <span>Languages:</span>
                <span
                  className={`${theme === "light" ? "" : "text-gray-100"} text-wrap font-normal`}
                >
                  {country?.languages &&
                    Object.values(country?.languages).join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div
            className={`flex ${(country?.borders?.length ?? 0) <= 4 ? "flex-row gap-x-8" : "flex-col gap-3"} font-semibold md:flex-row`}
          >
            <span className="flex items-center text-nowrap text-[1.2rem] md:text-[1.4rem]">
              Border Countries:
            </span>

            {country?.borders ? (
              <ul className="flex flex-wrap gap-4">
                {country?.borders?.map((border) => (
                  <Border border={border} key={border} />
                ))}
              </ul>
            ) : (
              <span
                className={`flex items-center text-[1rem] font-light italic md:text-[1.4rem] ${theme === "light" ? "" : "text-gray-100"} `}
              >
                No border countries
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDetail;
