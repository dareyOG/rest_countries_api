import { useTheme } from "../hooks/CustomHooks";

function Main({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <main
      className={`h-full ${theme === "light" ? "bg-gray-50" : "bg-blue-100"}`}
    >
      {children}
    </main>
  );
}

export default Main;
