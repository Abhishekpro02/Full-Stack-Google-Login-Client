import React from "react";
import { DNA } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        zIndex: 50,
      }}
    >
      <DNA
        visible={true}
        height={80}
        width={80}
        ariaLabel="dna-loading"
        style={{}}
        className="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
