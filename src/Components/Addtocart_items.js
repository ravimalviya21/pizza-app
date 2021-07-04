import React from 'react';
import Pizza1 from './Images/Pizza1.png';


const Addtocart_items = (props) =>
{    
    const {CartItems, add , qauntity, remove , setAdded} = props;
    return(
        <React.Fragment>  
                {/* <div className="products-container"> */}
                {
                    CartItems.map((cart_products) =>
                <div className="product-list" key={cart_products.id}>
                        <div className="inner-row">
                            <div className="image"><img src={Pizza1}></img></div>
                            <div className="product-details">
                                <div><h5>{cart_products.name}</h5></div>
                                <div><h6>size : {cart_products.size}</h6></div>
                                <div><h6>quantity : {cart_products.total_quan}</h6></div>
                                <div className="inc-dec-buttons">
                                    <div className="inc-button" onClick={() => remove(cart_products, setAdded)}>-</div>
                                    <div className="dec-button"  onClick={() => add(cart_products , setAdded)}>+</div>
                                </div>
                            </div>
                        </div>
                {/* </div> */}
            </div>
                    )}
        </React.Fragment>
    )
}
export default Addtocart_items;