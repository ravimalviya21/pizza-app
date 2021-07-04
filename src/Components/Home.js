import React, {useState} from 'react';
import Pizza from '../Images/Pizza.png';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Image1 from '../Images/Image1.png';
import Image2 from '../Images/Image2.png';
import {AdditionalItems} from '../NavBar';
 


const Home = (props) =>
{       

    const {addCoke, addFrench} = React.useContext(AdditionalItems);
    const {quantity , price , Inc , Dec , small , medium , large , ex_large, new_data, add , setAdded , Added} = props;

    const coke = {name : "Coke Pack of 4" , size : "200ML" , price : 250 , id : 102030};
    const french  = {name : "French Fries" , size : "200GM" , price : 80 , id : 102040};

    const link = document.querySelectorAll(".pizza-size-list ul li");


    link.forEach(element => {
        element.addEventListener("click", function() { link.forEach(elem2 => elem2.classList.remove("active"))
        element.classList.add("active");
    } )
    })
        return(
            <React.Fragment>
                {
                    new_data.map((product) =>
                <div className="Home-container" key={product.id}>
                <div className="column-first">
                     <div className="home-image"><img src={Pizza}></img></div>
                     <div className="column-first-bottom">
                        {/* <Additional_item className="item1" Image1={Image1} id={102030}  name="Coke Pack of 4" size="200ML" price="Rs.250/-"></Additional_item>
                        <Additional_item className="item2" Image1={Image2} id={102040}  name="French Fries" size="200GM" price="Rs.80/-"></Additional_item> */}
                        <div className="bottom-row">
                    <div className="row-container">
                                <div className="add-image"><img src={Image1} style={{width : "60px"}} ></img></div>
                                <div className="column-container">
                                    <div><h4>{coke.name}</h4></div>
                                        <div><h4>{coke.size}</h4></div>
                                        <div className="price-bg"><h4>₹{coke.price}/-</h4></div>
                                </div>
                                <div className="add-button" onClick={() => addCoke(coke.id) }>
                                    <div className="plus-sign"></div>
                                    <div className="plus-sign plus-sign-vertical"></div>
                                    </div>
                    </div>  
                    </div>   
                    <div className="bottom-row">
                    <div className="row-container">
                                <div className="add-image"><img src={Image2} style={{width : "60px"}} ></img></div>
                                <div className="column-container">
                                    <div><h4>{french.name}</h4></div>
                                        <div><h4>{french.size}</h4></div>
                                        <div className="price-bg"><h4>₹{french.price}/-</h4></div>
                                </div>
                                <div className="add-button" onClick={() => addFrench(french.id) }>
                                    <div className="plus-sign"></div>
                                    <div className="plus-sign plus-sign-vertical"></div>
                                    </div>
                    </div>  
                    </div>   
                     </div>
                 </div>

                <div className="column-two">
                        <div className="slogan">
                            <div className="break-slogans1">
                                <h3>cheesy &</h3>
                                <h4>cheesier</h4>
                            </div>
                        </div>
                        <div className="break-line"></div>
                        <div className="pizza-name"><h3>{product.name}</h3></div>
                        <div className="pizza-discription"><p>{product.pizza_incredients}</p></div>
                        <div className="pizza-size-list">
                                <ul>
                                    <li onClick={() => small()} className="active">s</li>
                                    <li onClick={() => medium()}>m</li>
                                    <li onClick={() => large()}>l</li>
                                    <li onClick={() => ex_large()}>el</li>
                                </ul>
                            
                        </div>
                        <div className="pizza-quantity">
                            <ul>
                                <li onClick={() => Dec()}><button>-</button></li>
                                <li>{quantity}</li>
                                <li onClick={() => Inc()}><button>+</button></li>
                            </ul>
                        </div>
                        <div className="final-buying">
                            <div className="final-price">
                            <h4>Rs. { quantity * price }/-</h4>
                            </div>
                                <div className="add-to-cart-button">
                                    <div className="add-to-cart-button2" onClick={() => add(product , setAdded)}>
                                             <div className="cart-inner"><h4 className="Added">{Added}</h4></div>
                                            <div><LocalMallIcon></LocalMallIcon></div>
                                </div>
                                </div>
                        </div>
                </div>
                </div>
                    )}
            </React.Fragment>
        )
}
export default Home;