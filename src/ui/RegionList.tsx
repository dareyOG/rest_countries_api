import { useState } from "react";
import { useCountries, useTheme } from "../hooks/CustomHooks";

function RegionList() {
  const [region, setRegion] = useState<string>("");
  const { isLoading } = useCountries();
  const { theme } = useTheme();

  return (
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
  );
}

export default RegionList;
