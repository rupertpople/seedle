import React from "react";
import "./index.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Seedle | <a href="https://github.com/rupertpople/seedle" target="_blank" rel="noreferrer" >Github</a> | <a href="https://makers.tech/" target="_blank" rel="noreferrer" >Makers</a>  | <a href="https://nbnatlas.org/" target="_blank" rel="noreferrer" >NBN Atlas</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;