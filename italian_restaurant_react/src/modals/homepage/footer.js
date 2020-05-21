import React from 'react';


function Footer() {
    return (
        <div>
            <footer>
                <div className="wide">
                    <a className="footerlink" href="">contact</a>
                    <a className="footerlink" href="">facebook</a>
                    <a className="footerlink" href="">instagram</a>
                    <a className="footerlink" href="">locations</a>
                </div>
                <div className="wrap">
                    <div className="adress-phone">
                        <a href="">650 K STREET NW Washington, DC</a>
                        <a href=""> 202-204-4480</a>
                    </div>
                    <div><p>CARRYOUT & DELIVERY MONDAY - SUNDAY 4:00 PM – 9:00 PM</p></div>
                </div>
            </footer>

            <div className="subfooter">
                <a href="" className="subfooterlink"
                >©2020 RPM Restaurants®. A Lettuce Entertain You®</a
                >
            </div>
        </div>
    );
}

export default Footer;
