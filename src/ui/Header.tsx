import { useCountries } from "../context/CountriesContext";
import Theme from "../features/Theme";

function Header() {
  const { theme } = useCountries();
  return (
    <header
      className={`flex items-center justify-between border-b-2 ${theme === "light" ? "border-gray-50 bg-white" : "border-blue-50 bg-blue-50"} px-[3rem] py-[1rem] shadow-md md:sticky md:top-0 md:px-24`}
    >
      <h1
        className={`w-fit text-[1.2rem] ${theme === "light" ? "" : "text-gray-50"} font-bold md:text-[2rem]`}
      >
        Where in the world?
      </h1>
      <Theme />
    </header>
  );
}

export default Header;
