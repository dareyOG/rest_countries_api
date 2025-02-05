import Theme from "../features/Theme";

function Header() {
  return (
    <div className="flex items-center justify-between border-2 border-transparent bg-white px-[6rem] py-[3rem] text-[1.8rem]">
      <h1 className="font-bold">Where in the world?</h1>
      <Theme />
    </div>
  );
}

export default Header;
