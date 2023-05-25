import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Searchsvg } from "../../img/search.svg";

import Pagination from "../pagination";
import "./customers.css";
const Customers = () => {
  const buttonRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setInputValue("");
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [searchBtnActive, setSearchBtnActive] = useState(1);
  const clients = [
    {
      name: "Jane Cooper",
      company: "Microsoft",
      phone: "(225) 555-0118",
      email: "janke@microsoft.com",
      country: "United States",
      status: true,
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: false,
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      phone: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: true,
    },
    {
      name: "Jane Cooper",
      company: "Microsoft",
      phone: "(225) 555-0118",
      email: "janke@microsoft.com",
      country: "United States",
      status: true,
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: false,
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      phone: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: true,
    },
    {
      name: "Jane Cooper",
      company: "Microsoft",
      phone: "(225) 555-0118",
      email: "janke@microsoft.com",
      country: "United States",
      status: true,
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: false,
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      phone: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: true,
    },
    {
      name: "Jane Cooper",
      company: "Microsoft",
      phone: "(225) 555-0118",
      email: "janke@microsoft.com",
      country: "United States",
      status: true,
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: false,
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      phone: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: true,
    },
    {
      name: "Jane Cooper",
      company: "Microsoft",
      phone: "(225) 555-0118",
      email: "janke@microsoft.com",
      country: "United States",
      status: true,
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: false,
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      phone: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: true,
    },
  ];
  const [clientShow, setClientShow] = useState(clients);
  const filt = (value, type) => {
    if (value === "status") {
      return clients.filter((item) => item.status === true);
    }
    return clients.filter((item) => item[type].includes(value));
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    let res = filt(event.target.value, "name");
    if (res.length !== clients.length) {
      setClientShow(res);
    } else {
      setClientShow(clients);
    }
  };

  return (
    <div className="customers">
      <h1 className="customers__title">Hello Evano 👋🏼,</h1>
      <div className="clients">
        <div className="search">
          <div className="search__list">
            <ul>
              <li
                className={`search__item ${
                  searchBtnActive === 1 ? "search__item--active" : ""
                }`}
                onClick={() => {
                  setClientShow(clients);
                  setSearchBtnActive(1);
                }}
              >
                All Customers
              </li>
              <li
                className={`search__item${
                  searchBtnActive === 2 ? " search__item--active" : ""
                }`}
                onClick={() => {
                  let res = filt("status");
                  setClientShow(res);
                  setSearchBtnActive(2);
                }}
              >
                Active Members
              </li>
            </ul>
          </div>
          <div className="search__btn">
            <Searchsvg />
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Search"
              ref={buttonRef}
            />
          </div>
        </div>

        <div className="customers__list">
          <div className="customers__head">
            <p>Customer Name</p>
            <p>Company</p>
            <p>Phone Number</p>
            <p>Email</p>
            <p>Country</p>
            <p>Status</p>
          </div>
        </div>
        <Pagination clientShow={clientShow} />
      </div>
    </div>
  );
};

export default Customers;
