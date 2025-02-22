import { useEffect, useRef } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useCountries, useTheme } from "../hooks/CustomHooks";

function SearchBar() {
  const { isLoading, query, setQuery } = useCountries();
  const { theme } = useTheme();

  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(
    function () {
      const focusSearchBar = (e: { key: string }): void => {
        // focus  on the search bar using the 'Enter' key
        if (e.key === "Enter") {
          inputEl.current?.focus();
          setQuery("");
        }
      };

      document.addEventListener("keydown", focusSearchBar);

      return () => {
        document.removeEventListener("keydown", focusSearchBar);
      };
    },
    [setQuery],
  );

  return (
    <div
      className={`relative flex items-center ${theme === "light" ? "" : "text-gray-50"}`}
    >
      <span className="absolute left-[1.5rem] z-10">
        <HiMagnifyingGlass />
      </span>

      <input
        type="text"
        value={query}
        disabled={isLoading}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
        placeholder="Search for a country..."
        className={`w-full rounded-[0.5rem] border border-transparent ${theme === "light" ? "" : "bg-blue-50 placeholder:text-gray-50"} px-[4rem] py-[1.5rem] shadow-md transition-all duration-500 focus:outline-none focus:ring-0 focus:ring-gray-100 lg:focus:w-[40rem]`}
      />
    </div>
  );
}

export default SearchBar;
