import { useState } from "react";
import { FormInput } from "../types";
import SearchBar from "../ui/SearchBar";

function Form() {
  const [region, setRegion] = useState<FormInput>("");

  return (
    <form className="flex flex-col gap-12 pb-[4rem] text-[1.5rem] md:justify-between lg:flex-row">
      <SearchBar />

      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="w-[65%] rounded-[0.8rem] border-transparent px-8 py-4 focus:outline-none focus:ring-1 focus:ring-gray-100 lg:w-[25%]"
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

{
  /* <div className="">
<div className="border-transparent relative w-[50%] rounded-[0.5rem] border border-blue-100 bg-white px-8 py-5 md:w-auto">
  <div className="flex w-full cursor-pointer items-center justify-between gap-16">
    <span>Filter by Region</span>
    <span>🔽</span>
  </div>
  <ul className="absolute mt-4 bg-white">
    <Region />
    <Region />
    <Region />
    <Region />
  </ul>
</div>
</div> */
}
