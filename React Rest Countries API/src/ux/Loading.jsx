import React from "react";
import c from "./Loading.module.css";
import CircleLoader from "react-spinners/CircleLoader";

const Loading = () => {
  return (
    <div className={c.div}>
      <div className={c.spinner}>
        <CircleLoader />
      </div>

      <p>Loading...</p>
    </div>
  );
};

export default Loading;
