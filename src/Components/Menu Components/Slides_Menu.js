import React ,{useState , useContext} from 'react';
import Menu_List from './Menu_List';
import {Slides} from '../../NavBar';


const Slides_Menu = () =>
{
    const {recreated_slides, slidesQuanHandler, addSlides}  = useContext(Slides);
    return(
        <React.Fragment>                    
            <div className="pizza-menu-main-container">
            <div className="pizza-menu-container-parent">
                {
                    recreated_slides.map((slides) => 
                        
                   
            <div className="pizza-menu-container">
                <div className={slides.Borderstyle ? "pizza-menu-container-inner" : "pizza-menu-container-inner-onclick"}>
                    <div className="pizza-menu-container-inner-row">
                        <div className="pizza-menu-container-inner-image">
                         <img src={slides.Images}></img>
                        </div>
                        <div className="pizza-menu-container-inner-details">
                            <div className="pizza-menu-container-inner-pizza-name">
                                <h5>{slides.Names}</h5>
                            </div>
                            <div className="pizza-menu-container-inner-pizza-desc">
                                <p>{slides.Desc}</p>
                            </div>
                            <div className="pizza-menu-container-inner-pizza-size-quan">
                                <div className="quan">
                                    <select className="slides-quantity" onChange={(event) => slidesQuanHandler(event , slides.$id)}>
                                        <option selected value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                </div>
                                {/* <div className="pizza-size">
                                    <select>
                                        <option>s</option>
                                        <option>m</option>
                                        <option>l</option>
                                    </select>
                                </div> */}
                            </div>
                            <div className="pizza-menu-container-inner-pizza-size-price">
                                <div><h5>₹{slides.Prices*slides.quantity}</h5></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={slides.Borderstyle ? "pizza-menu-add-button" : "pizza-menu-add-button-onclick" }>
                    <div className="pizza-menu-add-button-inner" onClick={(e) => addSlides(e, slides) }>
                        <div className={slides.Borderstyle ? "button-line1" : "button-line1-onclick"}></div>
                        <div className={slides.Borderstyle ? "button-line2" : "button-line2-onclick"}></div>
                    </div>
                </div>
            </div>
                     
                     
                     )
                }
            </div>
            </div>
                           
        </React.Fragment>
    )
}
export default Slides_Menu;