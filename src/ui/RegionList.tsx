import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useCountries } from "../features/SearchCountry/useCountries";
import { RegionProps } from "../types";

function RegionList() {
  const { isLoading, region, setRegion } = useCountries();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage =
    searchParams.get("page") &&
    (region === "americas" || region === "africa" || region === "europe")
      ? Number(searchParams.get("page"))
      : 1;

  useEffect(() => {
    searchParams.set("region", region);
    if (searchParams.get("region") !== "all")
      searchParams.set("page", currentPage.toString());

    setSearchParams(searchParams);
  }, [region, setSearchParams, searchParams, currentPage]);

  return (
    <select
      value={region}
      onChange={(e) => setRegion(e.target.value as RegionProps)}
      disabled={isLoading}
      className="w-[70%] rounded-[0.8rem] border-transparent p-[1rem] text-[1rem] focus:outline-none focus:ring-1 focus:ring-gray-100 dark:bg-blue-50 dark:text-gray-50 md:text-[1.5rem] lg:w-[15%]"
    >
      <option value="all">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}

export default RegionList;
