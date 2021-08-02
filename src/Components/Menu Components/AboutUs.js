import React from 'react';
import AboutUsImage from './Images/AboutUsImage.svg';
import facebook from './social icons/facebook.svg'
import instagram from './social icons/instagram.svg'
import pinterest from './social icons/pinterest.svg'
import linkedin from './social icons/linkedin.svg'
import twitter from './social icons/twitter.svg'
import youtube from './social icons/youtube.svg'


const AboutUs = () =>
{
    return(
        <React.Fragment>
            <div className="about-us-upper-section">
                <div className="aboutus-image">
                    <img src={AboutUsImage}></img>
                </div>
                <div className="aboutus-para">
                    <p>The Pizza House’s is the largest pizza restaurant chain in the world based on global retail sales,
 with more than 18,000 stores in over 90 markets. Founded in 1960, our roots are in convenient
 pizza delivery, while a significant amount of our sales also come from carryout customers.
 Although we are a highly-recognized global brand, we focus on serving the local neighborhoods
 in which we live and do business through our large network of franchise owners and Company-owned
 stores. On average, we sell more than 3 million pizzas each day throughout our global system.</p>
                </div>
            </div>

            <div className="about-us-lower-section">
                <div className="about-us-footer">
                    <div className="footer-details">
                        <div className="about-brand-short">
                            <h5>About Us</h5>
                            <p>The Pizza House’s is the largest pizza restaurant chain in the world
 based on global retail sales, with more than 18,000
 stores in over 90 markets.</p>
                        </div>
                        <div className="about-details">
                            <div>
                                <h6>address:</h6>
                                <p>34 horizon street , San Francisco , United States</p>
                            </div>
                            <div>
                                <h6>telephone :</h6>
                                <p>+1 242 4942 290</p>
                            </div>
                            <div>
                                <h6>email :</h6>
                                <p>thepizzahouse@yahoo.com</p>
                            </div>
                        </div>
                        <div className="about-social-icons">
                            <img src={facebook}></img>
                            <img src={youtube}></img>
                            <img src={pinterest}></img>
                            <img src={instagram}></img>
                            <img src={linkedin}></img>
                            <img src={twitter}></img>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AboutUs;