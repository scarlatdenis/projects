import React from "react"

function Header () {
    return (
        <div>
            <header>
                <nav className="navHeader">                
                    <ul className="headerNav">
                    <button>Order Online</button>
                    <button>Menu</button>
                    <button>Special Offerings</button>
                    <button>Private Parties</button>
                    <button>Gift Cards</button>
                    <button>Restaurants</button>
                    <button className="btnReserve">reserve</button>
                    </ul>
                </nav>
            </header>
        </div>
    )
}


export default Header;