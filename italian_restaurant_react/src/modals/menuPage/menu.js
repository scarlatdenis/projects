import React from 'react';
import MakeAReservation from '../reservationModal/makeareservation';



function Menu() {
    return (
        <div>
            <div id="deliverycaryout" >
                <h2> <span>Delivery & Carry Out</span> </h2>
                {/* <a className="downloadPdf" href="">Download pdf</a> */}
                <div className="menuSection">
                    <h3 className="sectionName">Antipasti & Salats</h3>
                    <p className="itemWrap">
                        <span className="itemName">Truffled Garlic Bread circa 1963</span>
                        <span className="itemPrice">9</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Mozzarella in Carozza</span>
                        <span className="itemPrice">10</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Fried Olives</span>
                        <span className="itemPrice">6</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Prime Beef Meatballs</span>
                        <span className="itemPrice"><span>14</span></span>
                        <span className="itemDescription"></span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Imported Burrata</span>
                        <span className="itemPrice"><span>16</span></span>
                        <span className="itemDescription">Sunkissed Tomato, Olive</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Giuliana's Italian Salad</span>
                        <span className="itemPrice"><span>12</span></span>
                        <span className="itemDescription">Salumi, Pepperoncini</span>
                    </p>

                    <h3 className="sectionName">HOUSEMADE PASTA</h3>
                    <p className="itemWrap">
                        <span className="itemName">Mama DePandi's Bucatini</span>
                        <span className="itemPrice">14</span>
                        <span className="itemDescription">Parmesan, Genovese Basil</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Carbonara</span>
                        <span className="itemPrice">18</span>
                        <span className="itemDescription">Spaghetti, Black Pepper Pancetta, Egg Yolk</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Shrimp Scampi</span>
                        <span className="itemPrice">21</span>
                        <span className="itemDescription">Calabrian Chili, Tomato, Roasted Garlic</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Pappardelle Bolognese</span>
                        <span className="itemPrice"><span>20</span></span>
                        <span className="itemDescription">Hand-Cut Pasta, Short Rib Ragù</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Chitarra Cacio e Pepe</span>
                        <span className="itemPrice"><span>18</span></span>
                        <span className="itemDescription">Black Pepper</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Spicy King Crab</span>
                        <span className="itemPrice"><span>26</span></span>
                        <span className="itemDescription">Squid Ink Spaghetti, Fresno Chili</span>
                    </p>


                    <h3 className="sectionName">STEAK & SEAFOOD</h3>
                    <p className="itemWrap">
                        <span className="itemName">Creekstone Filet Mignon</span>
                        <span className="itemPrice">47</span>
                        <span className="itemDescription">All Natural, Cherry Peppers</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Bone-In Ribeye</span>
                        <span className="itemPrice">55</span>
                        <span className="itemDescription">Painted Hills Ranch, Oregon</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Kansas City Strip Steak</span>
                        <span className="itemPrice">85</span>
                        <span className="itemDescription">Beeman Ranch Wagyu</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Atlantic Swordfish</span>
                        <span className="itemPrice"><span>28</span></span>
                        <span className="itemDescription">Red Pepper Tapenade</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Roasted Salmon</span>
                        <span className="itemPrice"><span>37</span></span>
                        <span className="itemDescription">Sicilian Pistachio Pesto</span>
                    </p>
                    <h3 className="sectionName">dessert</h3>
                    <p className="itemWrap">
                        <span className="itemName">Bill's Chocolate Budino</span>
                        <span className="itemPrice">9</span>
                        <span className="itemDescription">Salted Caramel, Cocoa Nibs</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">RPM Cheesecake</span>
                        <span className="itemPrice">15</span>
                        <span className="itemDescription">Blueberry Compote, Graham Cracker Crust</span>
                    </p>
                    <p className="itemWrap">
                        <span className="itemName">Tiramisu</span>
                        <span className="itemPrice">15</span>
                        <span className="itemDescription">Mascarpone Cream, Coffee Crème Brûlée</span>
                    </p>

                    {/* make a reservation */}
                    <MakeAReservation />

                </div>
            </div>
        </div>
    )
}



export default Menu;