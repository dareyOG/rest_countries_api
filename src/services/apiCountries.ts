export async function loadCountries() {
  try {
    const countriesRes = await fetch(`https://restcountries.com/v3.1/all`);

    const countriesData = countriesRes.json();
    return countriesData;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching data");
  }
}

export async function searchCountry(name: string) {
  try {
    const countryRes = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`,
    );

    const countryData = countryRes.json();
    // console.log(countryData);

    return countryData;
  } catch (error) {
    console.log(error);

    throw new Error(`Error fetching data for ${name}`);
  }
}
