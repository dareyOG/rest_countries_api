import Theme from '../features/Theme';

function Header() {
  return (
    <div className="flex justify-between items-center bg-white">
      <h1>Where in the world?</h1>
      <Theme />
    </div>
  );
}

export default Header;
