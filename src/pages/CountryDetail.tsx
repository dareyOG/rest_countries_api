import { useNavigate, useParams } from "react-router-dom";

import { useCountries } from "../features/SearchCountry/useCountries";

import BorderCountry from "../ui/BorderCountry";
import Loader from "../ui/Loader";

import { formatNumber } from "../utils/help";
import { HiArrowLongLeft } from "react-icons/hi2";

function CountryDetail() {
  const { countryName } = useParams();
  const { countries, isLoading } = useCountries();
  const navigate = useNavigate();

  const country = countries
    ?.filter((country) =>
      country.name.common.toLowerCase().includes(countryName as string),
    )
    ?.at(0);

  const handleGoBack = () => navigate(-1);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="flex flex-col gap-[3rem]">
          <button
            onClick={handleGoBack}
            className="flex max-w-fit items-center gap-x-3 rounded-md bg-gray-50 px-[2rem] py-[0.5rem] text-gray-100 shadow-md transition-all duration-300 ease-linear hover:bg-gray-100 hover:text-gray-50 hover:shadow-gray-100 dark:bg-blue-50 dark:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-blue-50"
          >
            <HiArrowLongLeft />
            <span className="text-[1.2rem] md:text-[1.5rem]">Back</span>
          </button>

          <div className="flex flex-col gap-[3.5rem] dark:text-gray-50 lg:flex-row lg:items-center lg:justify-center lg:gap-[8rem]">
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
                    <span className="font-normal dark:text-gray-100">
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
                    <span className="font-normal dark:text-gray-100">
                      {formatNumber(country?.population as number)}
                    </span>{" "}
                  </p>
                  <p className="space-x-4">
                    <span> Region:</span>
                    <span className="font-normal dark:text-gray-100">
                      {country?.region}
                    </span>
                  </p>
                  <p className="space-x-4">
                    <span>Sub Region:</span>
                    <span className="font-normal dark:text-gray-100">
                      {country?.subregion}
                    </span>
                  </p>
                  <p className="space-x-4">
                    <span>Capital:</span>
                    <span className="font-normal dark:text-gray-100">
                      {country?.capital.at(0)}
                    </span>
                  </p>
                </div>

                <div className="font-medium">
                  <p className="space-x-4">
                    <span> Top Level Domain:</span>
                    <span className="font-normal dark:text-gray-100">
                      {country?.tld.at(0)}
                    </span>
                  </p>
                  <p className="space-x-4">
                    <span>Currencies: </span>
                    <span className="font-normal dark:text-gray-100">
                      {country?.currencies &&
                        Object.values(
                          country.currencies as {
                            [key: string]: { name: string };
                          },
                        )
                          .map((currency) => currency.name)
                          .join(", ")}
                    </span>
                  </p>
                  <p className="space-x-4">
                    <span>Languages:</span>
                    <span className="font-normal dark:text-gray-100">
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
                    {country?.borders?.map((border: string) => (
                      <BorderCountry border={border} key={border} />
                    ))}
                  </ul>
                ) : (
                  <span className="flex items-center text-[1rem] font-light italic dark:text-gray-100 md:text-[1.4rem]">
                    No border countries
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default CountryDetail;
