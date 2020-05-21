import React from 'react';
import './privateParties.css'
import { Form } from 'react-bootstrap'


const FormInput = () => {
    return (
        <div className="divDefault">
            <div className="formPrivateParties">
                <h1> please enter your contact information</h1>
                <section className="form">
                    <div className="sectoninput">
                        <p>name</p>
                        <input className="name"></input>
                        <p>surname</p>
                        <input className="surname"></input>
                    </div>
                    <div className="sectoninput">
                        <p>Email</p>
                        <input className="email"></input>
                    </div>
                    <div className="sectoninput">
                        <p>Phone number</p>
                        <input className="phone"></input>
                    </div>
                    <div className="sectoninput">
                        <p>Company</p>
                        <input className="company"></input>
                    </div>

                    <button>Submit</button>

                </section>

            </div>
        </div>
    )
}

export default FormInput;