import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navitem = ({ handleClick, arr }) => {
  const [activeItem, setActiveitem] = useState(2);

  return (
    <>
      {arr.map(({ name, Imag }, index) => {
        return (
          <li
            key={`${index}_${name}`}
            onClick={() => {
              handleClick();
              setActiveitem(index);
            }}
          >
            <Link
              to={name}
              className={`list__item ${index === activeItem ? "active" : ""}`}
            >
              <div className="list__item-img">{Imag}</div>
              <p className="list__item-name">{name}</p>
              {index !== 0 && <span className="list__item-go">{">"}</span>}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Navitem;
