import React from 'react';
import Addtocart_items from './Addtocart_items';
import Addtocart_sum from './Addtocart_sum';
import {AddPizzaCart} from '../NavBar';
import PizzaMenuCart from './Menu Components/PizzaMenuCart';
import SlidesMenuCart from './Menu Components/SlidesMenuCart';
import DessertMenuCart from './Menu Components/DessertMenuCart';
import DrinkMenuCart from './Menu Components/DrinkMenuCart';
const Addtocart = (props) =>
{
    const {cartLength} = React.useContext(AddPizzaCart);
    const {CartItems , add , quantity, remove , price , setAdded} = props;

    return(
        <React.Fragment>

            <div className="top-heading">
            { cartLength === 0 ? <h1>cart is empty</h1>  :  <h1>your cart</h1> }
                </div>
            <div className="cart-summary">
         {  cartLength === 0 ? <h3>Cart summary is empty</h3>  :    <h3>your cart summary</h3> }
                </div> 

            <div className="products-container">  
            <Addtocart_items CartItems={CartItems} add={add} quantity={quantity} remove={remove} setAdded={setAdded}></Addtocart_items>
            <PizzaMenuCart></PizzaMenuCart>
            <SlidesMenuCart></SlidesMenuCart>
            <DessertMenuCart></DessertMenuCart>
            <DrinkMenuCart></DrinkMenuCart>
            </div>

            <div className="your-cart-summary">
                 { cartLength !==0 &&  <Addtocart_sum CartItems={CartItems}></Addtocart_sum>  }
            </div>
        </React.Fragment>
    )
}
export default Addtocart;