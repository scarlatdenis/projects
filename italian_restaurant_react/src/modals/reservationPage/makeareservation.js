import React, { Component } from 'react';
import { Form, } from 'react-bootstrap';




function MakeAReservation() {


    return (
        <div>

            <h3 className="makeareservation">
                <span >Make a reservation</span>
            </h3>

           

            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label></Form.Label>
                    <Form.Control as="select" custom>

                        <option>Select a date</option>

                    </Form.Control>
                    <Form.Control as="select" custom>

                        <option>04.30 PM</option>
                        <option>05.00 PM</option>
                        <option>05.30 PM</option>
                        <option>06.00 PM</option>
                        <option>06.30 PM</option>
                        <option>07.00 PM</option>
                        <option>07.30 PM</option>
                        <option>08.00 PM</option>
                        <option>08.30 PM</option>
                        <option>09.00 PM</option>
                        <option>09.30 PM</option>
                        <option>10.00 PM</option>
                        <option>10.30 PM</option>
                        <option>11.00 PM</option>
                        <option>11.30 PM</option>
                    </Form.Control>
                    <Form.Control as="select" custom>
                        <option>1 person</option>
                        <option>2 people</option>
                        <option>3 people</option>
                        <option>4 people</option>
                        <option>5 people</option>
                        <option>6 people</option>
                        <option>7 people</option>
                        <option>8 people</option>
                        <option>9 people</option>
                        <option>10 people</option>
                        <option>12 people</option>
                        <option>12 people</option>
                        <option>13 people</option>
                        <option>14 people</option>
                        <option>15 people</option>
                        <option>16 people</option>
                        <option>17 people</option>
                        <option>18 people</option>
                        <option>19 people</option>
                        <option>20 people</option>
                        <option>Larger party</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </div>
    )
}

export default MakeAReservation;