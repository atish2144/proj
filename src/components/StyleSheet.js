import React from "react";
import "./Stylesheet.css";

function StyleSheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font`}>StyleSheet</h1>
    </div>
  );
}

export default StyleSheet;
