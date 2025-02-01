function Country({ country }) {
  return (
    <div className="w-auto border border-blue-200 bg-white">
      <div className="">
        <img src={country.flags.svg} alt={`flag of ${country.name}`} />
      </div>

      <div className="">
        <h1>{country.name}</h1>
        <div className="">
          <p>Population:{country.population}</p>
          <p>Region:{country.region}</p>
          <p>Capital:{country.capital}</p>
        </div>
      </div>
    </div>
  );
}

export default Country;
