function Theme() {
  const handleToggleTheme = () => {};
  return (
    <button
      className="text-[1.2rem] capitalize md:text-[1.5rem]"
      onClick={handleToggleTheme}
    >
      <span>🌜</span>
      <span>dark mode</span>
    </button>
  );
}

export default Theme;
