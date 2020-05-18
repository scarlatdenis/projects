import React from 'react';

function HeaderBackground () {
    return (
            <body>
      <div className="bg">
        <p className="py-5 text-center"></p>
        <div className="about-us">
          <div className="copy">
            <img
              className="logo-about"
              src="https://www.scarlat.md/wp-content/uploads/2018/03/logo-500px-wide2.png"
              alt=""
            />
            <p className="about-us-text">
              Located in Washington, D.C.’s Mount Vernon neighborhood, RPM
              Italian is modern in approach and Italian in spirit and features a
              contemporary, chef­-driven menu with dishes meant to be shared.
            </p>
            <button className="aboutUs">About us</button>
          </div>
        </div>
      </div>
    </body>

    )
}

export default HeaderBackground;