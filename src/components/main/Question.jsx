import React, { useState } from "react";
import { arrowdown, arrowup } from "../../helper/icons";
import mainStyle from "./main.module.scss";

const Question = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show);
  };
  return (
    <div>
      <main className={item.id}>
        <header className={mainStyle.head}>
          <p className={mainStyle.question}>
            {item.id}.{item.question}{" "}
          </p>
          <p className={mainStyle.key} onClick={handleOpen}>
            {show ? arrowup : arrowdown}
          </p>
        </header>
        {show && <p className={mainStyle.answer}>{item.answer}</p>}
      </main>
    </div>
  );
};

export default Question;
