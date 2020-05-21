import React from "react"

const Navbar = () => {

    return (
        <div>
            <div className="headerbar">
                <div className="topnav">
                    <a className="button" href="/home">home</a>
                    <a href="/menu" className="button">Menu</a>
                    <a className="button" href="/spectialofferings">Special Offerings</a>
                    <a className="button" href="/privateparties" >Private Parties</a>
                    <a className="button" href="/giftcards">Gift Cards</a>
                    <a className="button" href="/restaurants">Restaurants</a>
                    <a className="button reserve" href="/reserve">reserve</a>
                </div>
            </div>
        </div>
    )

}



export default Navbar;