import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {AddPizzaCart} from '../NavBar';

const Addtocart_sum = (props) =>
{
    const {addPizzaCart, addSlidesCart, addDessertCart, addDrinkCart} = React.useContext(AddPizzaCart);
    const {CartItems} = props;
    const addPizzaPrice = addPizzaCart.reduce((a, c) => a + c.Prices * c.quantity, 0 );
    const addSlidesPrice = addSlidesCart.reduce((a, c) => a + c.Prices * c.quantity, 0);
    const addDessertPrice = addDessertCart.reduce((a, c) => a + c.Prices * c.quantity , 0 );
    const addDrinkPrice = addDrinkCart.reduce((a, c) => a + c.Prices * c.quantity , 0 );
    const addCartItems = CartItems.reduce((a, c) => a + c.price * c.total_quan , 0 );
    let totalPrice = (addPizzaPrice+addSlidesPrice+addDessertPrice+addDrinkPrice+addCartItems);
    let GST = (0.08*totalPrice);
    let shippingCharge = 40;
    let total = (GST+shippingCharge)+(totalPrice);

    return(
        <React.Fragment>
            <div className="add-to-cart-summary-container" >
                <div className="cart-sum-line1"></div>

                <div className="product-summary-name-price">
                    {
                        CartItems.map((x) => 
          <div>
                 <div className="inner-product-name-price"><h3>{x.name}</h3><h3>Quantity : {x.total_quan} X {x.total_quan * x.price}</h3> </div> 
                 <div>
                     
            { x.cokeid === 1 &&  <div className="inner-product-name-price"><h3>{x.coke}</h3><h3>₹{x.cokePrice}/-</h3> </div> }
            { x.frenchid === 2 &&  <div className="inner-product-name-price"><h3>{x.french}</h3><h3>₹{x.frenchPrice}/-</h3> </div> }
                 </div> 
                 
                 
         </div>
                
                           )   }
                           {
                        addPizzaCart.map((y) => 
                 <div className="inner-product-name-price"><h3>{y.Names}</h3><h3>Quantity : {y.quantity} X {y.quantity * y.Prices}</h3></div>
                           )   }
                 {
                        addSlidesCart.map((y) => 
                 <div className="inner-product-name-price"><h3>{y.Names}</h3><h3>Quantity : {y.quantity} X {y.quantity * y.Prices}</h3></div>
                           )   }
                {
                        addDessertCart.map((y) => 
                 <div className="inner-product-name-price"><h3>{y.Names}</h3><h3>Quantity : {y.quantity} X {y.quantity * y.Prices}</h3></div>
                           )   }
                {
                        addDrinkCart.map((y) => 
                 <div className="inner-product-name-price"><h3>{y.Names}</h3><h3>Quantity : {y.quantity} X {y.quantity * y.Prices}</h3></div>
                           )   }
                </div>

                <div className="cart-sum-line2"></div>

                <div className="applied-summary-charges">
                    <div className="inner-product-name-price"><h3>total</h3><h3>₹ { 
                   totalPrice   }</h3></div>
                    <div className="inner-product-name-price"><h3>GST</h3><h3>{
                      GST.toFixed(2)
                       }</h3></div>
                    <div className="inner-product-name-price"><h3>shipping charges</h3><h3>₹ {shippingCharge}</h3></div>
                </div>

                <div className="cart-sum-line3"></div>

                <div className="total-payment-summary">
                    <div className="inner-product-name-price"><h3>You Pay</h3> <h3>₹ {total.toFixed(2)}
                      </h3> </div>
                </div>
 
                <div className="proceed-button">
                    <div className="proceed-to-pay"><div><h4>proceed to pay</h4></div><div><ArrowRightIcon></ArrowRightIcon></div></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Addtocart_sum;