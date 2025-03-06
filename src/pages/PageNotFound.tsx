import { useCountries } from "../features/SearchCountry/useCountries";

function PageNotFound() {
  const { isError } = useCountries();

  return (
    <div className="flex h-screen items-center justify-center bg-blue-100 capitalize text-gray-50">
      ⚠️ {isError ? `failed in fetching countries` : `page not found`}
    </div>
  );
}

export default PageNotFound;
