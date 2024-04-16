import React, { useState } from "react";
import Question from "./Question";

const Main = ({ data }) => {

  return (
    <div>
      {data.map((item) => (
      <Question item={item} key={item.id}/>
      ))}
    </div>
  );
};

export default Main;
