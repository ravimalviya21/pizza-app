import React from 'react';
import PizzaBoy from './Images/PizzaBoy.svg';

const Contact = () =>
{
    return(
        <React.Fragment>
            <div className="contact-section-main-container">
            <div className="contact-image-header">
                <div className="PizzaBoy-image">
                <img src={PizzaBoy}></img>
                </div>
            </div>

            <div className="contact-header-container">
                <div className="text"> <h2>give your query!</h2> </div>
                <div className="form-details-bg">
                            <div className="form-details">
                                <input type="text" placeholder="Name"></input>
                                <input type="email" placeholder="Email"></input>
                                <input type="text" placeholder="Phone Number"></input>
                                <input type="text" placeholder="Enter Your Query"></input>
                            </div>

                            <div className="form-details-submission-button">
                                <div className="submit-form">
                                    <h5>send</h5>
                                </div>
                            </div>
                </div>
            </div>

            </div>
        </React.Fragment>
    )
}
export default Contact;