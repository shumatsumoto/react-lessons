import React from "react";
import "./Expression.css";

const Expression = () => {
  const title = "Expression";
  const array = ["item1", "item2", "item3"];
  const hello = (arg) => {
    return `${arg} Function...`;
  };
  return (
    <div className={title.toLowerCase()}>
      <h3>Hello, {title}</h3>
      <div>{array}</div>
      <div>{hello("aaa")}</div>
    </div>
  );
};

export default Expression;
