import React from 'react';
import './style.css'

function SpecialOfferings() {
    return (
        <div>
            <div className="bgspecialofferings">               
               <img className="specialofferingsimg" src="https://s3.amazonaws.com/bucket2.rpmrestaurants.com/wp-content/uploads/RPMItalian_Gallery_1.jpg"></img>

                <div className="about-us">
                    <div className="copy">
                        <h1 className="specialofferingstitle">Special offerings</h1>
                        <p className="about-us-text">
                            The perfect setting for any occasion, RPM Italian
                            plays host to prestigious purveyors, chefs, wineries and Champagne
                            houses for one­ of­ a ­kind events. To learn more, sign up for the RPM Italian
                            newsletter or view below for the latest special events.</p>
                        <button className="joinbutton">Join the <br/>newsletter</button>
                    </div>
                </div>
            </div>

            <section className="grey-callout-wrap">
                <div className="callout">
                    <div className="private-parties">
                        <h2>Aperitivo Hour for Two</h2>
                        <p>Monday – Sunday | 4:00 PM – 7:00 PM</p>
                        <p className="private-parties-text">
                        Enjoy Aperitivo Hour at home with our new experience for two! 
                        This package includes 600-Day Prosciutto, Imported Burrata, Fried Olives, 
                        Fried Mozzarella and a pint of RPM Negronis. Prepaid pick up is available for 
                        parties […] </p>
                        <a className="button" href="">learn more</a>
                    </div>
                </div>
                <img
                    className="img-gallery"
                    src="https://s3.amazonaws.com/bucket2.rpmrestaurants.com/wp-content/uploads/S7A6642.jpg"
                    alt=""
                />
            </section>

        </div>
    )
}

export default SpecialOfferings;