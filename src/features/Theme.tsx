import { useCountries } from "../context/CountriesContext";

function Theme() {
  const { theme, handleToggleTheme } = useCountries();
  return (
    <button
      className="text-[1.2rem] capitalize md:text-[1.5rem]"
      onClick={handleToggleTheme}
    >
      <span>{theme === "light" ? "☀️" : "🌜"}</span>
      <span
        className={`${theme === "light" ? "" : "text-gray-50"}`}
      >{`${theme === "light" ? "light" : "dark"} mode`}</span>
    </button>
  );
}

export default Theme;
