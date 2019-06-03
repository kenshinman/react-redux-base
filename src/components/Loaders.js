import React from "react";
import Loader from "react-loader-spinner";

export const ButtonLoader = () => (
  <Loader type="Oval" color="black" width="26" height="26" />
);

export const PageLoader = () => (
  <div
    style={{
      width: "100%",
      height: "100vh",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignContent: "center"
    }}>
    <Loader type="Oval" color="black" width="56" height="56" />
  </div>
);
