import React, {useContext} from 'react';
import{ Drinks} from '../../NavBar';

const Drinks_Menu = () =>
{
    const {recreated_drink , drinkQuanHandler, addDrink} = useContext(Drinks);
    return(
        <React.Fragment>
              <div className="pizza-menu-main-container">
            <div className="pizza-menu-container-parent">
                {
                    recreated_drink.map((drink) => {
                        return(
                                       <div className="pizza-menu-container">
                                        <div className={drink.Borderstyle ? "pizza-menu-container-inner" : "pizza-menu-container-inner-onclick"}>
                                            <div className="pizza-menu-container-inner-row">
                                                <div className="pizza-menu-container-inner-image">
                                                 <img src={drink.Images}></img>
                                                </div>
                                                <div className="pizza-menu-container-inner-details">
                                                    <div className="pizza-menu-container-inner-pizza-name">
                                                        <h5>{drink.Names}</h5>
                                                    </div>
                                                    <div className="pizza-menu-container-inner-pizza-size-quan">
                                                        <div className="quan">
                                                            <select onChange={(e) => drinkQuanHandler(e, drink.id) }>
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
                                                        <div><h5>₹{drink.Prices*drink.quantity}</h5></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={drink.Borderstyle ? "pizza-menu-add-button" : "pizza-menu-add-button-onclick"}>
                                            <div className="pizza-menu-add-button-inner" onClick={(e) => addDrink(e, drink) }>
                                                <div className={drink.Borderstyle ? "button-line1" : "button-line1-onclick"}></div>
                                                <div className={drink.Borderstyle ? "button-line2" : "button-line2-onclick"}></div>
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
export default Drinks_Menu;