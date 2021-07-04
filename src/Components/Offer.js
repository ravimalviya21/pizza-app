import React from 'react';
import {HashRouter as Router , NavLink , Route , Switch, Redirect} from 'react-router-dom';
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
                    <div><NavLink activeClassName="active-menu" to="/offer">pizza</NavLink></div>
                    <div className="menu-list-routing-line"></div>
                    <div><NavLink activeClassName="active-menu" to="/offer/slides">slides</NavLink></div>
                    <div className="menu-list-routing-line"></div>
                    <div><NavLink activeClassName="active-menu" to="/offer/dessert">desserts</NavLink></div>
                    <div className="menu-list-routing-line"></div>
                    <div><NavLink activeClassName="active-menu" to="/offer/drinks">drinks</NavLink></div>
                    <div className="menu-list-routing-line"></div>
                </div>
            </div>

            <Switch>
                <Route exact path="/offer"><Pizza_Menu pizza_list={pizza_list}></Pizza_Menu></Route>
                <Route path="/offer/slides"><Slides_Menu></Slides_Menu></Route>
                <Route path="/offer/dessert"><Desserts_Menu></Desserts_Menu></Route>
                <Route path="/offer/drinks"><Drinks_Menu></Drinks_Menu></Route>
                
            </Switch>
            </Router>
        </React.Fragment>
    )
}
export default Offer;