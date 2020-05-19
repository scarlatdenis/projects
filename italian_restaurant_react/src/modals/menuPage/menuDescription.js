import React from 'react';
import './menu.css'

const MenuDescription = () =>  {
    return (
        <div className="menubg">
            <img src="https://s3.amazonaws.com/bucket2.rpmrestaurants.com/wp-content/uploads/RPMItalian_Dinner_7.jpg" className="bgsmall" alt="" />

            <section className="menu-page">
                <div className="our-menus">
                    <h2>Menu</h2>
                    <p className="description-our-menu">
                        At RPM Italian, the core of our menu revolves around the
                        fresh artisan pastas made by hand every day, plus a wide selection of
                        steaks and chops, simply-grilled fish and Italian classics all perfect for
                        sharing.</p>
                    <div className="link-wrap">
                        <button>delivery & carry out</button>
                        <button>lunch menu</button>
                        <button>lunch express menu</button>
                        <button>aperitivo hour menu</button>
                        <button>cocktail menu</button>
                        <button>dinner menu</button>
                        <button>dessert menu</button>
                        <button>gluten free menu</button>
                    </div>
                </div>                
            </section>

        </div>
    )
}

export default MenuDescription;