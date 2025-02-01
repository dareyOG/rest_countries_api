function Form() {
  return (
    <form className="flex flex-col content-start gap-12 py-12 text-[1.5rem] md:flex-row md:justify-between">
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full rounded-[0.5rem] border border-transparent px-10 py-5 focus:outline-none focus:ring-2 focus:ring-blue-200 md:w-auto"
      />

      <select className="w-1/2 rounded-[0.8rem] border-transparent px-8 py-4 md:w-2/12">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
}

export default Form;

{
  /* <div className="">
<div className="border-transparent relative w-[50%] rounded-[0.5rem] border border-blue-100 bg-white px-8 py-5 md:w-auto">
  <div className="flex w-full cursor-pointer items-center justify-between gap-16">
    <span>Filter by Region</span>
    <span>🔽</span>
  </div>
  <ul className="absolute mt-4 bg-white">
    <Region />
    <Region />
    <Region />
    <Region />
  </ul>
</div>
</div> */
}
