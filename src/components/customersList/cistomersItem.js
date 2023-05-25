import React from "react";

const CistomersItem = ({ client }) => {
  const { name, company, phone, email, country, status } = client;
  return (
    <div className="item">
      <p>{name}</p>
      <p>{company}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{country}</p>
      <p>
        <div className={status ? "item__status active" : "item__status"}>
          {status ? "active" : "inactive"}
        </div>
      </p>
    </div>
  );
};

export default CistomersItem;
