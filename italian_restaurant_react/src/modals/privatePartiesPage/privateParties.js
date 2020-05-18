import React from 'react';
import '../privatePartiesPage/style.css'


function PriateParties () {
    return(
        <div>
            <div className="bgspecialofferings">               
                <img className="specialofferingsimg" src="https://s3.amazonaws.com/bucket2.rpmrestaurants.com/wp-content/uploads/RPMItalian_Gallery_8.jpg" ></img>
                <div className="about-us">
                    <div className="copy">
                        <h1 className="specialofferingstitle">Private Parties</h1>
                        <p className="about-us-text">
                        RPM Italian offers private dining for group of any size – whether an intimate 
                        party of 8 or a large celebration for up to 300 guests throughout the entire 
                        restaurant space. Our Parties & Special Events team is available to help guests 
                        create their own personalized private dining experience, paying attention to 
                        every detail from menu selection and design to wine pairings and floral
                         arrangements.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriateParties;