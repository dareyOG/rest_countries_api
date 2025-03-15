import { MoonLoader } from "react-spinners";
import { useTheme } from "../features/ThemeEffect/useTheme";

function Loader() {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center">
      <MoonLoader
        color={`${theme === "dark" ? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)"}`}
      />
    </div>
  );
}

export default Loader;
