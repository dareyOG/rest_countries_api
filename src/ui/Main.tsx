import { useCountries } from "../context/CountriesContext";

function Main({ children }: { children: React.ReactNode }) {
  const { theme } = useCountries();
  return (
    <main
      className={`h-full ${theme === "light" ? "bg-gray-50" : "bg-blue-100"}`}
    >
      {children}
    </main>
  );
}

export default Main;
