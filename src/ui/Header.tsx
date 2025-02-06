import Theme from "../features/Theme";

function Header() {
  return (
    <header className="flex h-auto items-center justify-between border-b-2 border-gray-50 bg-white px-24 py-8 shadow-md">
      <h1 className="w-fit text-[2rem] font-bold">Where in the world?</h1>
      <Theme />
    </header>
  );
}

export default Header;
