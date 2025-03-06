import RegionList from "../../ui/RegionList";
import SearchBar from "../../ui/SearchBar";

function SearchCountry() {
  return (
    <div
      role="form"
      className="z-10 mb-[4rem] flex flex-col justify-between gap-[3rem] text-[1.5rem] lg:flex-row"
    >
      <SearchBar />
      <RegionList />
    </div>
  );
}

export default SearchCountry;
