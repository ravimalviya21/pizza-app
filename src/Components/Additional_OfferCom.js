import React from 'react';
import OfferImage1 from './Images/OfferImage1.png';
import OfferImage2 from './Images/OfferImage2.png';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

const Additional_OfferCom = () =>
{
    return(
        <React.Fragment>
                     <div className="row-1">
                <div className="image-1-row">
                    <img src={OfferImage1}></img>
                </div>
                <div className="first-row-details">
                    <div className="pizza-name-offer">
                        <h4>cheese n corn</h4>
                    </div>
                    <div className="pizza-discription">
                        <p>cheese | golden corn</p>
                    </div>
                    <div className="pizza-size-quantity">
                        <div className="size-outer-div">
                            <select>
                                <option>s</option>
                                <option>m</option>
                                <option>l</option>
                                <option>el</option>
                            </select>
                        </div>
                        <div className="quantity-outer-div">
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="row1-pizza-price">
                      <div className="row1-pizza-price-background"><h3>Rs.210/-</h3></div>
                    </div>
                    <div className="pizza-button">
                        <div className="pizza-button-outer-div">
                            <div className="main-button">
                                <div><h3>order now</h3></div>
                                <div className="main-button-icon"><ArrowForwardRoundedIcon></ArrowForwardRoundedIcon></div>
                            </div>
                        </div>
                    </div>
                   
                </div>
             </div>
        </React.Fragment>
    )
}
export default Additional_OfferCom;