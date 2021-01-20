 import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{clear: "both", paddingTop: 20, margin:20}}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;