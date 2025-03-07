// import { useEffect, useRef } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useCountries } from "../features/SearchCountry/useCountries";

function SearchBar() {
  const { isLoading, query, setQuery } = useCountries();

  // console.log(query);

  return (
    <div className="relative flex items-center dark:text-gray-50">
      <span className="absolute left-[1.5rem] z-10">
        <HiMagnifyingGlass />
      </span>

      <input
        type="text"
        value={query}
        disabled={isLoading}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a country..."
        className="w-full rounded-[0.5rem] border border-transparent px-[4rem] py-[1.5rem] shadow-md transition-all duration-500 focus:outline-none focus:ring-0 focus:ring-gray-100 dark:bg-blue-50 dark:placeholder:text-gray-50 lg:focus:w-[40rem]"
      />
    </div>
  );
}

export default SearchBar;
