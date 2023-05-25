import React from "react";

import logo from "../../img/logo.svg";
import { ReactComponent as Dashboard } from "../../img/list/dashboard.svg";
import { ReactComponent as Product } from "../../img/list/product.svg";
import { ReactComponent as Customers } from "../../img/list/Customers.svg";
import { ReactComponent as Income } from "../../img/list/Income.svg";
import { ReactComponent as Promote } from "../../img/list/Promote.svg";
import { ReactComponent as Help } from "../../img/list/Help.svg";
import { useState } from "react";
import face from "../../img/face.png";
import { Link } from "react-router-dom";
import { Navitem } from "../index";
import "./navigate.css";
const Navigate = () => {
  const [isRotated, setIsRotated] = useState(false); // Стан для визначення поточного стану повороту

  const handleClick = () => {
    setIsRotated(!isRotated); // Зміна стану при кожному кліку
  };

  const arr = [
    { name: "dashboard", Imag: <Dashboard /> },
    { name: "product", Imag: <Product /> },
    { name: "customers", Imag: <Customers /> },
    { name: "income", Imag: <Income /> },
    { name: "promote", Imag: <Promote /> },
    { name: "help", Imag: <Help /> },
  ];
  return (
    <nav className={`nav ${isRotated ? "retreat" : ""}`}>
      <Link to="#" className="nav-header">
        <div className="nav_header-logo">
          <img src={logo} alt="logo" />
        </div>
        <h2 className="nav__header-name">Dashboard</h2>
        <span className="nav__version">v.01</span>
      </Link>
      <ul className="list">
        <Navitem
          handleClick={handleClick}
          // Dashboard={<Dashboard />}
          arr={arr}
        />
      </ul>

      <div className="user">
        <div className="user__img">
          <img src={face} alt="face" />
        </div>
        <div>
          <p className="user__name">Evano</p>
          <p className="user__position">Project Manager</p>
        </div>
      </div>
      <div className="navShow" onClick={handleClick}>
        {}
      </div>
    </nav>
  );
};

export default Navigate;
