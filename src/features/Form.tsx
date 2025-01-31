function Form() {
  return (
    <form className="flex justify-between">
      <div className="">
        🔍
        <input type="text" placeholder="Search for a country..." />
      </div>
      <select>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </form>
  );
}

export default Form;
