import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row" style={{ display: "flex" }}>
          {/* Column1 */}
          <div className="col">
            <h4>SEEDLE INC</h4>
            <ul className="list-unstyled">
              <p>Seedle HQ</p>
              <p>50-52 Commercial St, E1 6LT</p>
              <p>London, England </p>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>About</h4>
            <ul className="list-unstyled">
              <p>Seedle Project</p>
              <p>seedle-project@gmail.co.uk</p>
              <p>+44 (0)203 817 8870</p>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ul className="list-unstyled">
              <p>DANK MEMES</p>
              <p>OTHER STUFF</p>
              <p>GUD STUFF</p>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} SEEDLE | All rights reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;