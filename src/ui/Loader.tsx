import { Audio } from "react-loader-spinner";
function Loader() {
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
    />
  );
}

export default Loader;
