import React from 'react';
import {BrowserRouter as Router , NavLink , Route , Switch, Redirect, useRouteMatch , useParams} from 'react-router-dom';
import Pizza_Menu from './Menu Components/Pizza_Menu';
import Slides_Menu from './Menu Components/Slides_Menu';
import Desserts_Menu from './Menu Components/Desserts_Menu';
import Drinks_Menu from './Menu Components/Drinks_Menu';

const Offer = (props) =>
{
    const {pizza_list} = props;

    const route = useRouteMatch();

    const menuItems = {
        color : "#e16428"
    }

    return(
        <React.Fragment>
            <Router>
            <div className="menu-list-routing">
                <div className="menu-list-routing-inner">
                    <div className="menu-list-routing-line"></div>
                    <div><NavLink exact to={`${route.path}`} activeStyle={menuItems}>pizza</NavLink></div>
                    <div className="menu-list-routing-line"></div>
                    <div><NavLink  to={`${route.path}/slides`} className="hey" activeStyle={menuItems}>slides</NavLink></div>
                    <div className="menu-list-routing-line"></div>
                    <div><NavLink activeStyle={menuItems} to={`${route.path}/dessert`}>desserts</NavLink></div>
                    <div className="menu-list-routing-line"></div>
                    <div><NavLink activeStyle={menuItems} to={`${route.path}/drink`}>drinks</NavLink></div>
                    <div className="menu-list-routing-line"></div>
                </div>
            </div>

            <Switch>
             <Route exact path={`${route.path}`}>
             <Pizza_Menu pizza_list={pizza_list}></Pizza_Menu>  
             </Route>   
                <Route path={`${route.path}/slides`}><Slides_Menu></Slides_Menu></Route>
                <Route path={`${route.path}/dessert`}><Desserts_Menu></Desserts_Menu></Route>
                <Route path={`${route.path}/drink`}><Drinks_Menu></Drinks_Menu></Route>
                
            </Switch>
            </Router>
        </React.Fragment>
    )
}
export default Offer;