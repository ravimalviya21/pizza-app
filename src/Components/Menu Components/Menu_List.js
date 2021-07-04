import React from 'react';
import {useContext, useState} from 'react';
import {PizzaS} from '../../NavBar';
const Menu_List = () =>
{
    const {recreated_pizza, quanHandler, sizeHandler , addPizza} = useContext(PizzaS);
    console.log(recreated_pizza);

    return(
        <React.Fragment>
            { recreated_pizza.map((x , index) => 
            <div className="pizza-menu-container">
                <div id="hey" className={x.Borderstyle ? "pizza-menu-container-inner" : "pizza-menu-container-inner-onclick"}>
                    <div className="pizza-menu-container-inner-row">
                        <div className="pizza-menu-container-inner-image">
                         <img src={x.Images}></img>
                        </div>
                        <div className="pizza-menu-container-inner-details">
                            <div className="pizza-menu-container-inner-pizza-name">
                                <h5>{x.Names}</h5>
                            </div>
                            <div className="pizza-menu-container-inner-pizza-desc">
                                <p>{x.Desc}</p>
                            </div>
                            <div className="pizza-menu-container-inner-pizza-size-quan">
                                <div className="quan">
                                    <select className="pizza-size-option" onChange={(e) => quanHandler(e, x.id.$id)}>
                                        <option selected value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                </div>
                                <div className="pizza-size" onChange={(e) => sizeHandler(e, x.id.$id ) }>
                                    <select>
                                        <option value={"small"}>s</option>
                                        <option value={"medium"}>m</option>
                                        <option value={"large"}>l</option>
                                    </select>
                                </div>
                            </div>
                            <div className="pizza-menu-container-inner-pizza-size-price">
                                <div><h5>
                                            ₹{x.Prices*x.quantity*x.size}
                                     </h5></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={x.Borderstyle ? "pizza-menu-add-button" : "pizza-menu-add-button-onclick" }>
                    <div className="pizza-menu-add-button-inner" onClick={(e) => addPizza(e,x , x.style) }>
                        <div className={x.Borderstyle ? "button-line1" : "button-line1-onclick"}></div>
                        <div className={x.Borderstyle ? "button-line2" : "button-line2-onclick"}></div>
                    </div>
                </div>
            </div>
            )}
        </React.Fragment>
    )
}
export default Menu_List;