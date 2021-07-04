import React from 'react';
import {AddPizzaCart} from '../../NavBar';

const DrinkMenuCart = () =>
{
    const {addDrink , removeDrink , addDrinkCart } = React.useContext(AddPizzaCart);
    return(
        <React.Fragment>
                 { addDrinkCart.map((x) =>  
           <div className="product-list" key={x.id}>
                        <div className="inner-row inner-row2">
                            <div className="image image2 pizza-menu-container-inner-image"><img src={x.Images}></img></div>
                            <div className="product-details">
                                <div><h5>{x.Names}</h5></div>
                                {/* <div><h6>size : {x.sizeName}</h6></div> */}
                                <div><h6>quantity : {x.quantity}</h6></div>
                                <div className="inc-dec-buttons">
                                    <div className="inc-button" onClick={(e) => removeDrink(e, x) }>-</div>
                                    <div className="dec-button" onClick={(e) => addDrink(e, x) }>+</div>
                                </div>
                            </div>
                        </div>
                {/* </div> */}
            </div>
) }
        </React.Fragment>
    )
}
export default DrinkMenuCart;