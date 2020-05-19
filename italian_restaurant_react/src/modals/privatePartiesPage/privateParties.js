import React from 'react';
import './privateParties.css'
import FormInput from './formPrivateParties';


function PrivatePartiesPage() {
    return (
        <div>
            <div className="bgspecialofferings">
                <img className="specialofferings-img" src="https://s3.amazonaws.com/bucket2.rpmrestaurants.com/wp-content/uploads/RPMItalian_Gallery_8.jpg" ></img>
                <div className="about-private-parties">
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
                <section className="formInput">
                    <FormInput />
                </section>
                

                <div className="bg2specialofferings">
                    <img className="bgsmall" src="https://s3.amazonaws.com/bucket2.rpmrestaurants.com/wp-content/uploads/RPMItalian_Gallery_10.jpg"></img>
                </div>
                <section className="grey-callout-wrap">
                    <div className="callout">
                        <div className="private-parties">
                            <h2>menu</h2>
                            <p className="private-parties-text">
                                Offering fully customizable menus from our executive team of chefs </p>
                            <a className="button" href="">Private Party Menus </a>
                        </div>
                    </div>
                        <img className="img-gallery"
                            src="https://s3.amazonaws.com/bucket2.rpmrestaurants.com/wp-content/uploads/RPMItalian_GroupDinner-wide-1.jpg"></img>
                </section>
                <section className="grey-callout-wrap">
                    <div className="callout-reverse">
                        <div className="private-parties">
                            <h2>our spaces</h2>
                            <p className="private-parties-text">
                            At RPM, our private dining spaces are chic and modern – set in tones of blacks, whites 
                            and grays – and can fit any size of gathering.  </p>
                            <a className="button" href="">Information & spaces </a>
                        </div>
                    </div>
                        <img className="img-gallery-reverse"
                            src="https://s3.amazonaws.com/bucket2.rpmrestaurants.com/wp-content/uploads/Set-123-E2.jpg"></img>
                </section>
               
            </div>
        </div>
    )
}

export default PrivatePartiesPage;