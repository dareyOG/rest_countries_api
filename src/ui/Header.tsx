import Theme from "../features/ThemeEffect/Theme";

function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between border-b-2 border-gray-50 bg-white px-[3rem] py-[1rem] shadow-md dark:border-blue-50 dark:bg-blue-50 md:px-24">
      <h1 className="w-fit text-[1.2rem] font-semibold dark:text-gray-50 md:text-[2rem]">
        Where in the world?
      </h1>
      <Theme />
    </header>
  );
}

export default Header;
