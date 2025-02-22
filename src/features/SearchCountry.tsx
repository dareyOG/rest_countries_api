import RegionList from "../ui/RegionList";
import SearchBar from "../ui/SearchBar";

function SearchCountry() {
  return (
    <div className="flex flex-col gap-[3rem] pb-[4rem] text-[1.5rem] md:justify-between lg:flex-row">
      <SearchBar />
      <RegionList />
    </div>
  );
}

export default SearchCountry;
