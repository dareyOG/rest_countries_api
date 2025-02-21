import { useCountries } from "../hooks/CustomHooks";

function PageNotFound() {
  const { isError } = useCountries();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 capitalize text-gray-100">
      ⚠️ {isError ? `failed in fetching countries` : ` page not found`}
    </div>
  );
}

export default PageNotFound;
