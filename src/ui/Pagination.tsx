import { useSearchParams } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { PAGE_SIZE } from "../utils/constants";
import { PaginationProps } from "../types";
import { useCountries } from "../features/SearchCountry/useCountries";

function Pagination({ countriesCount, sortedCountries }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { region } = useCountries();

  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  // const pageCount =
  //   region === "all" ? Math.ceil(countriesCount / PAGE_SIZE) : 1;

  const pageCount =
    region === "all"
      ? Math.ceil(countriesCount / PAGE_SIZE)
      : region === "americas" || region === "africa" || region === "europe"
        ? Math.ceil(Number(sortedCountries.length) / PAGE_SIZE)
        : 1;

  const handlePrevious = () => {
    const previous = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", previous.toLocaleString());
    setSearchParams(searchParams);
  };

  const handleNext = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next.toLocaleString());
    setSearchParams(searchParams);
  };

  // if (pageCount <= 1) return null;
  // if (countriesCount <= PAGE_SIZE && pageCount <= 1) return null;

  return (
    <footer className="fixed bottom-0 right-0 mt-20 flex w-full items-center justify-center bg-blue-50 px-24 py-6 text-[1.5rem] text-gray-50 opacity-60 dark:bg-gray-50 dark:text-blue-200 md:justify-between">
      <p className="hidden md:block [&_span]:font-bold">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? countriesCount : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{countriesCount}</span> results
      </p>

      <div className="flex gap-16">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="flex items-center justify-between disabled:invisible [&_span:nth-child(1)]:duration-500 [&_span:nth-child(1)]:hover:-translate-x-2 [&_span:nth-child(2)]:transition-transform"
        >
          <span>
            <HiArrowLeft />
          </span>
          <span>Previous</span>
        </button>

        <p className="md:hidden">
          <span>
            {currentPage}/{pageCount}
          </span>
        </p>
        <button
          onClick={handleNext}
          disabled={currentPage === pageCount}
          className="flex items-center justify-between disabled:invisible [&_span:nth-child(2)]:transition-transform [&_span:nth-child(2)]:duration-500 [&_span:nth-child(2)]:hover:translate-x-2"
        >
          <span>Next</span>
          <span>
            <HiArrowRight />
          </span>
        </button>
      </div>
    </footer>
  );
}

export default Pagination;
