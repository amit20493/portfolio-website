import Links from './links/Links';
import './sidebar.scss';
import React from 'react';
import Togglebutton from './togglebuttons/togglebuttons';


const Sidebar =() =>{
    return(
        <div className="sidebar">
            <div className='background'>
                <Links/>
            </div>
            <Togglebutton/>

        </div>
    );
}

export default Sidebar;