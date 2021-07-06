import React  ,{useContext}  from 'react';
import {Desserts} from '../../NavBar';
import {useRouteMatch} from 'react-router-dom';

const Dessert_Menu = () =>
{
   
    const {recreated_desserts , dessQuanHandler, addDessert} = useContext(Desserts);
    const route = useRouteMatch();
    console.log("details", route);
    return(
        <React.Fragment>
          <div className="pizza-menu-main-container">
            <div className="pizza-menu-container-parent">
                {
                    recreated_desserts.map((dessert) => {
                        return(

                                <div className="pizza-menu-container">
                                <div className={dessert.Borderstyle ? "pizza-menu-container-inner" :"pizza-menu-container-inner-onclick"}>
                                    <div className="pizza-menu-container-inner-row">
                                        <div className="pizza-menu-container-inner-image">
                                         <img src={dessert.Images}></img>
                                        </div>
                                        <div className="pizza-menu-container-inner-details">
                                            <div className="pizza-menu-container-inner-pizza-name">
                                                <h5>{dessert.Names}</h5>
                                            </div>
                                            <div className="pizza-menu-container-inner-pizza-desc">
                                                <p>{dessert.Desc}</p>
                                            </div>
                                            <div className="pizza-menu-container-inner-pizza-size-quan">
                                                <div className="quan">
                                                    <select onChange={(e) => dessQuanHandler(e, dessert.id) }>
                                                        <option value={1}>1</option>
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
                                                <div><h5>₹{dessert.Prices*dessert.quantity}</h5></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={dessert.Borderstyle ? "pizza-menu-add-button" : "pizza-menu-add-button-onclick" }>
                                    <div className="pizza-menu-add-button-inner" onClick={(e) => addDessert(e, dessert)}>
                                        <div className={dessert.Borderstyle ? "button-line1" : "button-line1-onclick"}></div>
                                        <div className={dessert.Borderstyle ? "button-line2" : "button-line2-onclick"}></div>
                                    </div>
                                </div>
                            </div>
                                  )
                                } )
                            }
                </div>
                </div>
        </React.Fragment>
    )
}
export default Dessert_Menu;