import { useState } from "react";
import { FormInput } from "../types";

function SearchBar() {
  const [query, setQuery] = useState<FormInput>("");
  return (
    <div className="relative flex items-center border-blue-100">
      <span className="absolute left-[1.5rem] z-10">🔍</span>
      <input
        type="text"
        value={query}
        // disabled={isLoading}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a country..."
        className="w-full rounded-[0.5rem] border border-transparent px-[4rem] py-[1.5rem] shadow-md transition-all duration-500 focus:outline-none focus:ring-0 focus:ring-gray-100 lg:focus:w-[40rem]"
      />
    </div>
  );
}

export default SearchBar;
