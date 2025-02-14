import { useState } from "react";
import { FormInput } from "../types";
// import SearchBar from "../ui/SearchBar";
import { useCountries } from "../context/CountriesContext";
import { HiMagnifyingGlass } from "react-icons/hi2";

function Form() {
  const { isLoading, theme } = useCountries();
  const [query, setQuery] = useState<FormInput>("");
  const [region, setRegion] = useState<FormInput>("");
  console.log(isLoading);

  return (
    <form className="flex flex-col gap-12 pb-[4rem] text-[1.5rem] md:justify-between lg:flex-row">
      <div
        className={`relative flex items-center ${theme === "light" ? "" : "text-gray-50"} `}
      >
        <span className="absolute left-[1.5rem] z-10">
          <HiMagnifyingGlass />
        </span>
        <input
          type="text"
          value={query}
          disabled={isLoading}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a country..."
          className={`w-full rounded-[0.5rem] border border-transparent ${theme === "light" ? "" : "bg-blue-50 placeholder:text-gray-50"} px-[4rem] py-[1.5rem] shadow-md transition-all duration-500 focus:outline-none focus:ring-0 focus:ring-gray-100 lg:focus:w-[40rem]`}
        />
      </div>

      {/* <SearchBar /> */}

      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        disabled={isLoading}
        className={`w-[65%] rounded-[0.8rem] border-transparent ${theme === "light" ? "" : "bg-blue-50 text-gray-50"} px-8 py-4 focus:outline-none focus:ring-1 focus:ring-gray-100 lg:w-[25%]`}
      >
        <option value="" className="text-[1.1rem] md:text-[1.6rem]">
          Filter by Region
        </option>
        <option value="Africa" className="text-[1.1rem] md:text-[1.6rem]">
          Africa
        </option>
        <option value="America" className="text-[1.1rem] md:text-[1.6rem]">
          America
        </option>
        <option value="Asia" className="text-[1.1rem] md:text-[1.6rem]">
          Asia
        </option>
        <option value="Europe" className="text-[1.1rem] md:text-[1.6rem]">
          Europe
        </option>
        <option value="Oceania" className="text-[1.1rem] md:text-[1.6rem]">
          Oceania
        </option>
      </select>
    </form>
  );
}

export default Form;
