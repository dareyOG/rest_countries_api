import { useCountries } from "../context/CountriesContext";
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";

function Theme() {
  const { theme, handleToggleTheme } = useCountries();
  return (
    <button
      className="flex items-center gap-[0.5rem] text-[1.2rem] capitalize md:text-[1.4rem]"
      onClick={handleToggleTheme}
    >
      <span className={`${theme === "light" ? "" : "text-gray-50"}`}>
        {theme === "light" ? <HiSun /> : <HiMoon />}
      </span>
      <span
        className={`${theme === "light" ? "" : "text-gray-50"}`}
      >{`${theme === "light" ? "light" : "dark"} mode`}</span>
    </button>
  );
}

export default Theme;
