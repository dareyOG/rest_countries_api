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

  console.log(country);

  const handleClick = () => {
    navigate(-1);
    // navigate("/countries");
  };

  return (
    <section className="h-full bg-white">
      <button
        onClick={handleClick}
        className="space-x-2 rounded-md border border-gray-100 px-8 py-2"
      >
        <span>&larr;</span>
        <span>Back</span>
      </button>
      <div className="flex flex-col gap-20 md:flex-row">
        <img
          src={country?.flags.svg}
          alt={`flag of ${country?.name.common}`}
          className="w-[40rem] md:w-[50%]"
        />
        <div className="text-[1.6rem]">
          <h2 className="pb-[5rem] font-bold">{country?.name.common}</h2>
          <div className="">
            <p>Native Name:</p>
            <p>Population: {formatNumber(country?.population as number)}</p>
            <p>Region: {country?.region}</p>
            <p>Sub Region: {country?.subregion}</p>
            <p>capital: {country?.capital.at(0)}</p>
          </div>
        </div>
        <div className="">
          <p>Top Level Domain: {country?.tld.at(0)}</p>
          <p>Currencies: {"currencies"}</p>
          <p>Languages: {"languages"}</p>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <span>Border Countries:</span>
          <ul className="flex flex-wrap gap-8">
            {country?.borders.map((border) => (
              <Border border={border} key={border} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CountryDetail;
