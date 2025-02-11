import { useNavigate, useParams } from "react-router-dom";
import { useCountries } from "../context/CountriesContext";
import Border from "../ui/Border";
import { formatNumber } from "../utils/help";

function CountryDetail() {
  const { countries } = useCountries();
  const navigate = useNavigate();
  const { countryName } = useParams();

  // search country
  const country = countries.find(
    (country) => country.name.common === countryName,
  );

  const handleClick = () => {
    // navigate(-1);
    navigate("/countries");
  };

  console.log(country);

  return (
    <section className="flex flex-col gap-[5rem] bg-gray-50 px-[6rem] py-[4rem]">
      <button
        onClick={handleClick}
        className="flex max-w-fit items-center gap-x-3 rounded-md bg-white px-[2rem] py-[0.5rem] text-gray-100 shadow-md transition-all duration-300 ease-linear hover:bg-gray-100 hover:text-gray-50 hover:shadow-gray-100"
      >
        <span className="">&larr;</span>
        <span className="text-[1.2rem]">Back</span>
      </button>
      <div className="flex flex-col gap-[3.5rem] lg:flex-row lg:gap-[10rem]">
        <img
          src={country?.flags.svg}
          alt={`flag of ${country?.name.common}`}
          className="max-w-full object-cover md:h-[35rem] md:max-w-[55rem]"
        />
        <div className="flex flex-col gap-[4.5rem] md:py-[3.5rem]">
          <h2 className="max-w-fit text-[2rem] font-bold md:text-[3rem]">
            {country?.name.common}
          </h2>
          <div className="flex flex-col gap-[9rem] text-nowrap text-[1.6rem] font-bold md:flex-row">
            <div className="text-nowrap font-medium">
              <p className="space-x-4">
                <span>Native Name:</span>

                <span>
                  {Object.values(Object.values(country?.name).at(-1))
                    .map((name) => name.common)
                    .join(", ")}
                </span>
              </p>
              <p className="space-x-4">
                <span>Population:</span>
                <span className="font-normal">
                  {formatNumber(country?.population as number)}
                </span>{" "}
              </p>
              <p className="space-x-4">
                <span> Region:</span>
                <span className="font-normal">{country?.region}</span>
              </p>
              <p className="space-x-4">
                <span>Sub Region:</span>
                <span className="font-normal">{country?.subregion}</span>
              </p>
              <p className="space-x-4">
                <span>Capital:</span>
                <span className="font-normal">{country?.capital.at(0)}</span>
              </p>
            </div>

            <div className="font-medium">
              <p className="space-x-4">
                <span> Top Level Domain:</span>
                <span className="font-normal">{country?.tld.at(0)}</span>
              </p>
              <p className="space-x-4">
                <span>Currencies: </span>
                <span className="font-normal">
                  {Object.values(country?.currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
                </span>
              </p>
              <p className="space-x-4">
                <span>Languages:</span>
                <span className="font-normal">
                  {Object.values(country?.languages)
                    .map((lang) => lang)
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div
            className={`flex ${country?.borders ? "flex-col gap-3" : "flex-row gap-x-8"} font-semibold md:flex-row`}
          >
            <span className="text-nowrap text-[1.6rem]">Border Countries:</span>

            {country?.borders ? (
              <ul className="flex flex-wrap gap-4">
                {country?.borders?.map((border) => (
                  <Border border={border} key={border} />
                ))}
              </ul>
            ) : (
              <span className="flex items-center text-[1.2rem] font-light italic">
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
