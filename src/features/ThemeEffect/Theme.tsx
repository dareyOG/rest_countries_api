import { useTheme } from "./useTheme";
import { HiMoon, HiSun } from "react-icons/hi2";

function Theme() {
  const { theme, handleToggleTheme } = useTheme();
  return (
    <button
      className="flex items-center gap-[0.5rem] text-[1.2rem] capitalize md:text-[1.5rem] md:hover:underline md:hover:decoration-dashed md:hover:underline-offset-1 dark:md:hover:decoration-gray-50"
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
