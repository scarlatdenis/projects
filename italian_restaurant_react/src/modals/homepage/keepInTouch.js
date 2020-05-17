import React from 'react';

function KeepInTouch () {
    return(
        <div>
            <section className="keep-in-touch-wrap">
        <div className="keep-in-touch">
          <h2 className="keep-in-touch-tittle">keep in touch</h2>
          <p className="keep-in-touch-text">
            Sign up for our newsletter to learn about seasonal dishes, special
            events and more.
          </p>
          <div className="link-wrap">
            <a className="button" href="">reserve</a>
            <a className="button" href="">newsletter</a>
            <a className="button" href="">instagram</a>
            <a className="button" href="">facebook</a>
          </div>
        </div>
      </section>
      <img src="https://s3.amazonaws.com/bucket2.rpmrestaurants.com/wp-content/uploads/RPMItalian_GroupDinner-wide-1.jpg" className="bg2" alt="" />

        </div>
    )
}

export default KeepInTouch;