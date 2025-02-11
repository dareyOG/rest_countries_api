import { LineWave } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex h-screen items-center justify-center">
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="hsl(200, 15%, 8%)"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor="hsl(0, 0%, 52%)"
        middleLineColor="hsl(207, 26%, 17%)"
        lastLineColor="hsl(209, 23%, 22%)"
      />
    </div>
  );
}

export default Loader;
