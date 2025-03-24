import { useSearchParams } from "react-router-dom";
import { useCountries } from "../features/SearchCountry/useCountries";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { PAGE_SIZE } from "../utils/constants";
import { PaginationProps } from "../types";

function Pagination({
  countriesCount,
  sortedCountries,
  currentPage,
}: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { region } = useCountries();

  const totalPages =
    region === "all"
      ? Math.ceil(countriesCount / PAGE_SIZE)
      : Math.ceil(Number(sortedCountries.length) / PAGE_SIZE);

  const handlePrevious = () => {
    const previous = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", previous.toString());
    setSearchParams(searchParams);
  };

  const handleNext = () => {
    const next = currentPage === totalPages ? currentPage : currentPage + 1;

    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  };

  // if (pageCount <= 1) return null;
  // if (countriesCount <= PAGE_SIZE && totalPages <= 1) return null;

  return (
    <footer className="fixed bottom-0 right-0 mt-20 flex w-full items-center justify-center bg-blue-200 px-24 py-6 text-[1.5rem] text-white opacity-85 dark:bg-white dark:text-blue-200 md:justify-between">
      <p className="hidden font-normal md:block [&_span]:font-bold">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === totalPages
            ? countriesCount
            : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{countriesCount}</span> results
      </p>

      <div className="flex gap-16 font-semibold">
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

        <span className="rounded-full bg-gray-50 p-1 font-bold text-blue-200 dark:bg-blue-200 dark:text-gray-50">
          {currentPage}/{totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
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
