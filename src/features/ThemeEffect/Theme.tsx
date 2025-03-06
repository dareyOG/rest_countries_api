import { useTheme } from "./useTheme";
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";

function Theme() {
  const { theme, handleToggleTheme } = useTheme();
  return (
    <button
      className="flex items-center gap-[0.5rem] text-[1.2rem] capitalize md:text-[1.5rem]"
      onClick={handleToggleTheme}
    >
      <span className="dark:text-gray-50">
        {theme === "light" ? <HiSun /> : <HiMoon />}
      </span>
      <span className="dark:text-gray-50">{`${theme === "light" ? "light" : "dark"} mode`}</span>
    </button>
  );
}

export default Theme;
