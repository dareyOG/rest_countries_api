import { useEffect, useState } from "react";
import { Countries } from "../types";

import Country from "./Country";

function Main() {
  const [countries, setCountries] = useState([] as Countries);

  useEffect(() => {
    const renderCountries = async () => {
      const countriesRes = await fetch("/data/data.json");
      const countriesData = await countriesRes.json();
      const { countries } = countriesData;
      setCountries(countries);
    };
    renderCountries();
  }, []);
  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[6rem]">
      {countries.map((country) => (
        <Country country={country} key={country.name} />
      ))}
    </main>
  );
}

export default Main;
