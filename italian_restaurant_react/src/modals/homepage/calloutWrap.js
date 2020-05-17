import React from 'react';

function CalloutWrap() {
    return (
        <div>
            <section className="grey-callout-wrap">
                <div className="callout">
                    <div className="private-parties">
                        <h2>Private parties</h2>
                        <p className="private-parties-text">
                            RPM Italian offers private dining for any size group, whether an
                            intimate party of 8 or a large celebration for up to 350 guests
                            throughout the entire restaurant space. The private dining spaces
                            are chic and modern, set in tones of blacks, whites and grays.
          </p>
                        <a className="button" href="">learn more</a>
                    </div>
                </div>
                <img
                    className="img-gallery"
                    src="https://s3.amazonaws.com/bucket2.rpmrestaurants.com/wp-content/uploads/RPMItalian_Gallery_1-1.jpg"
                    alt=""
                />
            </section>
        </div>
    )
}

export default CalloutWrap;