import { useNavigate, useParams } from "react-router-dom";
import { useCountries } from "../context/CountriesContext";
import Border from "../ui/Border";
import { formatNumber } from "../utils/help";

function CountryDetail() {
  const { countries } = useCountries();
  const navigate = useNavigate();
  const { countryName } = useParams();

  // search country
  const country = countries.find((country) => country.name === countryName);

  console.log(country);
  // console.log(Object.values(country?.currencies));

  const handleClick = () => {
    // navigate(-1);
    navigate("/countries");
  };

  return (
    <section className="flex flex-col gap-[5rem] bg-gray-50 px-[6rem] py-[4rem]">
      <button
        onClick={handleClick}
        className="flex max-w-fit items-center gap-3 rounded-md border-2 border-gray-50 bg-white px-[2rem] py-[0.5rem] text-gray-100 shadow-2xl transition-all duration-300 ease-in hover:bg-gray-100 hover:text-white hover:shadow-md hover:shadow-blue-50"
      >
        <span>&larr;</span>
        <span className="text-[1.2rem]">Back</span>
      </button>
      <div className="flex flex-col gap-[10rem] md:flex-row">
        <img
          src={country?.flags.svg}
          alt={`flag of ${country?.name}`}
          className="max-w-[50rem] object-cover md:h-[35rem] md:w-[80rem]"
        />
        <div className="flex flex-col gap-[3rem] py-[3rem]">
          {/* grid grid-flow-row grid-cols-2 gap-[2rem] py-[2.5rem] */}

          <h2 className="max-w-fit text-[2.5rem] font-bold">{country?.name}</h2>
          <div className="flex gap-[2.5rem] text-[1.6rem] font-bold">
            <div className="font-medium">
              <p className="space-x-4">
                <span>Native Name:</span>
                <span>{country?.nativeName}</span>
              </p>
              <p className="space-x-1">
                <span>Population:</span>
                <span className="font-normal">
                  {formatNumber(country?.population as number)}
                </span>{" "}
              </p>
              <p className="space-x-2.5">
                <span> Region:</span>
                <span className="font-normal">{country?.region}</span>
              </p>
              <p className="space-x-2.5">
                <span>Sub Region:</span>
                <span className="font-normal">{country?.subregion}</span>
              </p>
              <p className="space-x-2.5">
                <span>capital:</span>
                <span className="font-normal">{country?.capital}</span>
              </p>
            </div>

            <div className="font-medium">
              <p className="space-x-2.5">
                <span> Top Level Domain:</span>
                <span className="font-normal">
                  {country?.topLevelDomain.at(0)}
                </span>
              </p>
              <p className="space-x-2.5">
                <span>Currencies: </span>
                <span className="font-normal">
                  {country?.currencies.at(0)?.name}
                </span>
              </p>
              <p className="space-x-2.5">
                <span>Languages:</span>
                <span className="font-normal">{"languages"}</span>
              </p>
            </div>
          </div>
          <div className="flex gap-3 font-semibold">
            <span className="text-nowrap text-[1.6rem]">Border Countries:</span>
            <span>
              <ul className="flex flex-wrap gap-8">
                {country?.borders?.map((border) => (
                  <Border border={border} key={border} />
                ))}
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDetail;
