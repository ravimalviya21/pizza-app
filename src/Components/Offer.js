import React from 'react';
import {BrowserRouter as Router , Link , Route , Switch} from 'react-router-dom';
import Pizza_Menu from './Menu Components/Pizza_Menu';
import Slides_Menu from './Menu Components/Slides_Menu';
import Desserts_Menu from './Menu Components/Desserts_Menu';
import Drinks_Menu from './Menu Components/Drinks_Menu';

const Offer = (props) =>
{
    const {pizza_list} = props;


    return(
        <React.Fragment>
            <Router>
            <div className="menu-list-routing">
                <div className="menu-list-routing-inner">
                    <div className="menu-list-routing-line"></div>
                    <div><Link to="/offer">pizza</Link></div>
                    <div className="menu-list-routing-line"></div>
                    <div><Link to="/slides">slides</Link></div>
                    <div className="menu-list-routing-line"></div>
                    <div><Link to="/dessert">desserts</Link></div>
                    <div className="menu-list-routing-line"></div>
                    <div><Link to="/drinks">drinks</Link></div>
                    <div className="menu-list-routing-line"></div>
                </div>
            </div>

            <Switch>
                <Route path="/offer" exact={true}><Pizza_Menu pizza_list={pizza_list}></Pizza_Menu></Route>
                <Route exact path="/slides"><Slides_Menu></Slides_Menu></Route>
                <Route exact path="/dessert"><Desserts_Menu></Desserts_Menu></Route>
                <Route exact path="/drinks"><Drinks_Menu></Drinks_Menu></Route>
            </Switch>
            </Router>
        </React.Fragment>
    )
}
export default Offer;