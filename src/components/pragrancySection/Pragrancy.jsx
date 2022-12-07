import React from "react";
import "./pragrancy.scss";
import { pragrancy } from "../ProductGrid/pragrancyApi";
const Pragrancy = () => {
  return (
    <div className="pragrencySection">
      <div className="container">
        {pragrancy.map((x) => (
          <div className="prarancy">
            <h2>{x.hiding}</h2>
            <p>{x.paragraraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pragrancy;
