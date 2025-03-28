import { useNavigate } from "react-router-dom";
import Theme from "../features/ThemeEffect/Theme";
import { useCountries } from "../features/SearchCountry/useCountries";

function Header() {
  const { setQuery, setRegion } = useCountries();
  const navigate = useNavigate();

  const handleGoHome = () => {
    setQuery("");
    setRegion("all");
    navigate("/countries");
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b-2 border-gray-50 bg-white px-[3rem] py-[1rem] shadow-md dark:border-blue-50 dark:bg-blue-50 md:px-24">
      <h1
        className="w-fit cursor-pointer text-[1.2rem] font-semibold dark:text-gray-50 md:text-[2rem] md:hover:underline md:hover:decoration-dashed md:hover:underline-offset-1 dark:md:hover:decoration-gray-50"
        onClick={handleGoHome}
      >
        Where in the world?
      </h1>
      <Theme />
    </header>
  );
}

export default Header;
