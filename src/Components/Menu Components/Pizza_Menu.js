import React from 'react';
import Menu_List from './Menu_List';

const Pizza_Menu = () =>
{
    return(
        <React.Fragment>
            <div className="pizza-menu-main-container">
            <div className="pizza-menu-container-parent">
               
                    <Menu_List></Menu_List>
            </div>
            </div>
        </React.Fragment>
    )
}
export default Pizza_Menu;