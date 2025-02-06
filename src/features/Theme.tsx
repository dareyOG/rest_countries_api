function Theme() {
  const handleToggleTheme = () => {};
  return (
    <button className="text-[1.5rem] capitalize" onClick={handleToggleTheme}>
      <span>🌜</span>
      <span>dark mode</span>
    </button>
  );
}

export default Theme;
