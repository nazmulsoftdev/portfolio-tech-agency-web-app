import React from "react";
import { Triangle } from "react-loader-spinner";

function LoaderUI() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Triangle
        height="80"
        width="80"
        color="#EF0178"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default LoaderUI;
