import Theme from "../features/Theme";

function Header() {
  return (
    <header className="flex h-auto items-center justify-between border-b-2 border-gray-50 bg-white px-12 py-8 shadow-md md:px-24">
      <h1 className="w-fit text-[1.2rem] font-bold md:text-[2rem]">
        Where in the world?
      </h1>
      <Theme />
    </header>
  );
}

export default Header;
