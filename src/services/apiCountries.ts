export async function getCountries() {
  try {
    const countriesRes = await fetch(`https://restcountries.com/v3.1/all`);

    const countriesData = countriesRes.json();
    return countriesData;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
