import React from 'react'
import ThePizzaHouse from './ThePizzaHouse.svg'
import AddToCart from './AddToCart.svg'
import {HashRouter as Router, Link, Route, Switch, Redirect, useRouteMatch} from 'react-router-dom';
import Home , {Added} from './Components/Home';
import Offer from './Components/Offer'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import Addtocart from './Components/Addtocart';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import Hamburger from './Hamburger.svg';
import data from './Components/json/data';
import {useState ,useEffect, createContext} from 'react';


const Slides = createContext();
const Desserts = createContext();
const Drinks = createContext();
const PizzaS = createContext();
const AddPizzaCart = createContext();
const AdditionalItems = createContext();

const NavBar = () =>
{

    const {pizzadata, pizza_list , slides , desserts, drink} = data;
    const [gotdata, changedata] = useState(pizzadata);
    var   [quantity, new_quantity] = useState(1);
    const [size , setSize] = useState("small");
    const [price , setprice] = useState(90);
    const [CartItems , TotalCartItems] = useState([]);
    const [Added , setAdded] = useState("add to cart");
    const [recreated_pizza , updatedPizza] = useState([]);
    const [recreated_slides, updatedSlides] = useState([]);
    const [recreated_desserts , updatedDesserts] = useState([]);
    const [recreated_drink , updatedDrink] = useState([]);
    const [addPizzaCart , updatePizzaCart] = useState([]);
    const [addSlidesCart , updateSlidesCart] = useState([]);
    const [addDessertCart , updateDessertCart] = useState([]);
    const [addDrinkCart, updateDrinkCart] = useState([]);

    const cartLength = CartItems.length+addPizzaCart.length+
    addSlidesCart.length+addDessertCart.length+addDrinkCart.length;

    const menuItems = {
        color : "#e16428"
    }





    useEffect ( () => {
    const recreated_pizza = pizza_list.map((x) => {
        return  {...x , quantity : 1 , size : 1 , sizeName : "small" , Borderstyle : true} 
    } )
    updatedPizza(recreated_pizza);
    },[] )

    useEffect (() => {
        const recreated_slides = slides.map((x) => {
            let a = x.Prices.replace("₹", "");
            let val = parseInt(a);
            return {...x , quantity : 1 , Prices : val , Borderstyle : true }
        } )
    updatedSlides(recreated_slides);
    }, [] )

    useEffect( () => {
        const recreated_desserts = desserts.map((x) => {
            let a = x.Prices.replace("₹", "");
            let val = parseInt(a);
            return {...x , quantity : 1 , Prices : val , Borderstyle : true}
        } )
        updatedDesserts(recreated_desserts)
    } , []  )

    useEffect(() => {
        const recreated_drink = drink.map((x) => {
            let a = x.Prices.replace("₹", "");
            let b = parseInt(a);
            return {...x , quantity : 1 , Prices : b, Borderstyle : true}
        } )
        updatedDrink(recreated_drink)
    }, [] )

    const drinkQuanHandler = (e, id) =>
    {
        let val = e.target.value;
        let a = parseInt(val)
        updatedDrink(
            recreated_drink.map((x) => x.id === id ? {...x , quantity : a} : x )
        )
    }

    const dessQuanHandler = (e , id) =>
    {
        let val = e.target.value;
        let a = parseInt(val);
        updatedDesserts( 
            recreated_desserts.map((x) => x.id === id ? { ...x , quantity : a }  : x )
         )
    }

    const slidesQuanHandler = (event, id) => 
    {
            let val1 = event.target.value;
            let a = parseInt(val1);
            updatedSlides(
                recreated_slides.map((x) => x.$id === id ? {...x , quantity : a} : x )
            )
    }


    const quanHandler = (e , id) =>
    {
        let val = e.target.value;
        let a = parseInt(val)
        updatedPizza( 
            recreated_pizza.map((x) => x.id.$id === id ? {...x , quantity : a } : x )
         )
    }
    const sizeHandler = (e, id) =>
    {
        let size = e.target.value;
        let val = 1
        if(e.target.value === "small")
        {
            val = 1;
        }
        else if(e.target.value === "medium")
        {
            val = 1.5;
        }
        else if(e.target.value === "large")
        {
            val = 2;
        }
        updatedPizza(
            recreated_pizza.map((x) => x.id.$id === id ? {...x, size : val , sizeName : size} : x)
        )
    }

    const Inc = ()  =>
    {
            if(quantity<5)
            {
                new_quantity(quantity+1)
                quantity+=1;
            }   
    }
    const Dec = () =>
    {
        if(quantity!==1)
        {
            new_quantity(quantity-1)
            quantity-=1;
        }
    }

    const small = () =>
    {
        setSize("small");
        setprice(99);

    }
    const medium = () =>
    {
        setSize("medium");
        setprice(129);
    }
    const large = () =>
    {
        setSize("large");
        setprice(320);
    }
    const ex_large = () =>
    {
        setSize("ex_large");
        setprice(420);
    }


    const new_data = [{...gotdata[0] , size : size , total_quan : quantity , price : price}];

    const addPizza = (e ,x) =>
    {
        const check = addPizzaCart.find(a => a.id.$id === x.id.$id )
        if(check)
        {
            updatePizzaCart( addPizzaCart.map((y) => {
                if(y.id.$id === x.id.$id)
                {
                    return {...y , quantity : check.quantity+1}
                }
                return y;
            } ) )
        }
        else
        {
            updatedPizza( recreated_pizza.map((z) => { 
                if(z.id.$id === x.id.$id)
                {
                    return {...z , Borderstyle : false}
                }
                return z;
             } ) )
            updatePizzaCart([...addPizzaCart, {...x}])
        }
    }

    const removePizza = (e, x) => 
    {
        const check = addPizzaCart.find(a => a.id.$id === x.id.$id )
        if(check.quantity === 1)
        {
            updatedPizza(recreated_pizza.map((z) => { 
                if(z.id.$id === x.id.$id)
                {
                    return {...z , Borderstyle : true}
                }
                return z;
             } ))
            updatePizzaCart( addPizzaCart.filter((b) => b.id.$id !== x.id.$id  ) )
        }
        else
        {
            updatePizzaCart( addPizzaCart.map((a) => {
                if(a.id.$id === x.id.$id)
                {
                    if(a.quantity !== 1)
                    {
                        return {...a , quantity : check.quantity-1}
                    }
                }
            } ) )
        }
    }

    const addSlides = (e ,x) =>
    {
        const check = addSlidesCart.find(a => a.$id === x.$id )
        if(check)
        {
            updateSlidesCart( addSlidesCart.map((y) => {
                if(y.$id === x.$id)
                {
                    return {...check , quantity : check.quantity+1}
                }
                return y;
            } ) )
        }
        else
        {
            updatedSlides( recreated_slides.map((q) => { 
                if(q.$id === x.$id)
                {
                    return {...q , Borderstyle : false}
                }
                return q;
             } ) )
            updateSlidesCart([...addSlidesCart, {...x}])
        }
    }

    const removeSlides = (e, x) => 
    {
        const check = addSlidesCart.find(a => a.$id === x.$id )
        if(check.quantity === 1)
        {
            updatedSlides( recreated_slides.map((q) => { 
                if(q.$id === x.$id)
                {
                    return {...q , Borderstyle : true}
                }
                return q;
             } ) )
            updateSlidesCart( addSlidesCart.filter((b) => b.$id !== x.$id  ) )
        }
        else
        {
            updateSlidesCart( addSlidesCart.map((a) => {
                if(a.$id === x.$id)
                {
                    if(a.quantity !== 1)
                    {
                        return {...a , quantity : check.quantity-1}
                    }
                }
            } ) )
        }
    }
    
    const addDessert = (e ,x) =>
    {
        const check = addDessertCart.find(a => a.id === x.id )
        if(check)
        {
            updateDessertCart( addDessertCart.map((y) => {
                if(y.id === x.id)
                {
                    return {...check , quantity : check.quantity+1}
                }
                return y;
            } ) )
        }
        else
        {
            updatedDesserts( recreated_desserts.map((w) => { 
                if(w.id === x.id)
                {
                    return {...w , Borderstyle : false}
                }
                return w;
             } ) )
            updateDessertCart([...addDessertCart, {...x}])
        }
    }

    const removeDessert = (e, x) => 
    {
        const check = addDessertCart.find(a => a.id === x.id )
        if(check.quantity === 1)
        {
            updatedDesserts( recreated_desserts.map((w) => { 
                if(w.id === x.id)
                {
                    return {...w , Borderstyle : true}
                }
                return w;
             } ) )
            updateDessertCart( addDessertCart.filter((b) => b.id !== x.id  ) )
        }
        else
        {
            updateDessertCart( addDessertCart.map((a) => {
                if(a.id === x.id)
                {
                    if(a.quantity !== 1)
                    {
                        return {...a , quantity : check.quantity-1}
                    }
                }
            } ) )
        }
    }

    const addDrink = (e ,x) =>
    {
        const check = addDrinkCart.find(a => a.id === x.id )
        if(check)
        {
            updateDrinkCart( addDrinkCart.map((y) => {
                if(y.id === x.id)
                {
                    return {...check , quantity : check.quantity+1}
                }
                return y;
            } ) )
        }
        else
        {
            updatedDrink( recreated_drink.map((e) => { 
                if(e.id === x.id)
                {
                    return {...e , Borderstyle : false}
                }
                return e;
             } ) )
            updateDrinkCart([...addDrinkCart, {...x}])
        }
    }

    const removeDrink = (e, x) => 
    {
        const check = addDrinkCart.find(a => a.id === x.id )
        if(check.quantity === 1)
        {
            updatedDrink( recreated_drink.map((e) => { 
                if(e.id === x.id)
                {
                    return {...e , Borderstyle : true}
                }
                return e;
             } ) )
            updateDrinkCart( addDrinkCart.filter((b) => b.id !== x.id  ) )
        }
        else
        {
            updateDrinkCart( addDrinkCart.map((a) => {
                if(a.id === x.id)
                {
                    if(a.quantity !== 1)
                    {
                        return {...a , quantity : check.quantity-1}
                    }
                }
            } ) )
        }
    }

    

    


    const add = (product  , setAdded) =>
    {
        const exist = CartItems.find(x => x.id === product.id)
        if(exist)
        {
            TotalCartItems(CartItems.map((x) => {
                if(x.id === product.id)
                {
                    setAdded("Added");
                    new_quantity(quantity= quantity+1)
                    return { ...exist , total_quan : quantity }
                }
                return x;
            } ))
        }
        else
        {
            setAdded("Added");
            TotalCartItems([...CartItems , {...product , total_quan : quantity}])
        }
    }
    const remove = (product , setAdded) =>
    {
       const exist = CartItems.find(x => x.id === product.id)
       if(exist.total_quan === 1)
       {
           TotalCartItems(CartItems.filter(x => x.id !== product.id))
           setAdded("Add to Cart");
       }
       else
       {
           TotalCartItems(CartItems.map((x) => 
           {
               if(x.id === product.id)
               {
                   if(quantity!==1)
                   {
                       new_quantity(quantity = quantity-1)
                   }
                   return {...exist , total_quan : quantity}
               }
           }))
       }
    }

    const addCoke = (id) =>
    {
            if(CartItems.length !== 0)
            {
                TotalCartItems(CartItems.map((x) => {
                    return {...x , coke : "Coke Pack of 4" , cokePrice : 250 , cokeid : 1}
                } ))
            }
    }
    const addFrench = (id) =>
    {
        if(CartItems.length !==0)
        {
            TotalCartItems(CartItems.map((y) => {
                return {...y , french : "French Fries" , frenchPrice : 80 , frenchid : 2}
            } ))
        }
    }

    const received =  { quantity, price ,CartItems, small , medium , large , ex_large , new_data, Inc , Dec, add , remove , Added,  setAdded};




        return(
            <React.Fragment>
                <Router>
                <div className="header-section">
                <div className="menu-icon" ><img src={Hamburger} style={{width: "40px"}}></img></div>
                    {/* <div className="menu-icon"><MenuRoundedIcon style={{fontSize: "30", color : "white"}}></MenuRoundedIcon></div> */}
                    <div className="header-logo">
                        <img src={ThePizzaHouse} style={{width: "200px"}}></img>
                    </div>

                    <div className="header-section-responsive">
                        <div> <ClearRoundedIcon className="cross-icon"></ClearRoundedIcon> </div>
                    <div className="navbar-section-list">
                        <li><Link  to="/" className="home-link"><HomeRoundedIcon className="home-icon"></HomeRoundedIcon> Home</Link></li>
                        <li><Link  to="/offer" className="offer-link"><LocalOfferRoundedIcon className="offer-icon"></LocalOfferRoundedIcon>Menu</Link></li>
                        <li><Link  className="contact-link"><PermContactCalendarRoundedIcon className="contact-icon"></PermContactCalendarRoundedIcon>Contact Us</Link></li>
                        <li><Link  className="about-link"><InfoRoundedIcon className="about-icon"></InfoRoundedIcon>About Us</Link></li>
                    </div>
                    </div>

                    <div className="shopping-cart-icon">
                    { cartLength !==0 && <div className="add-to-cart-icon-badge">{cartLength}</div> }
                    <Link to="/cart"><AddShoppingCartIcon style={{fontSize : "40" , fontWeight: 30}} className="shopping-cart"></AddShoppingCartIcon></Link>
                    </div>
                </div>
                <Switch>
                <Route exact path="/"><AdditionalItems.Provider value={{addCoke, addFrench}}>
                    <Home {...received}>
                    </Home>
                    </AdditionalItems.Provider>
                </Route>
                <Route path="/offer">
                    
                <Slides.Provider value={{recreated_slides, slidesQuanHandler, addSlides}}>
                <Desserts.Provider value={{recreated_desserts , dessQuanHandler, addDessert}}>
                <Drinks.Provider value={{recreated_drink , updatedDrink , drinkQuanHandler, addDrink}}>
                <PizzaS.Provider value={{recreated_pizza, quanHandler, sizeHandler, addPizza}}>
                <Offer pizza_list={pizza_list}>
                </Offer>
                </PizzaS.Provider>
                </Drinks.Provider>
                </Desserts.Provider>
                </Slides.Provider>

                </Route>
                <Route path="/cart"><AddPizzaCart.Provider value={{cartLength, addPizzaCart,addSlidesCart,addSlides,
                     addPizza,addDessert,removeDessert,addDrinkCart, addDrink , removeDrink,
                     addDessertCart, removeSlides, removePizza}}>
                         <Addtocart {...received}></Addtocart></AddPizzaCart.Provider></Route>
                         <Redirect to="/"></Redirect>
                
                </Switch>

                </Router>
            </React.Fragment>
        )
    
};
export default NavBar;
export {Slides , Desserts , Drinks, PizzaS , AddPizzaCart , AdditionalItems};