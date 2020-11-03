import React from 'react';
import classes from './MenuToggle.module.css';


const MenuToggle = (props) => {

    const cls = [
        classes.MenuToggle,
        // classes.isOpen
    ];

    if(props.isOpen){
        cls.push('fa fa-times',classes.isOpen);
    }else{
        cls.push('fa fa-bars');
    }

    return(

        <i
            className={cls.join(' ')}
            onClick={props.onMenuToggle.bind()}
        >

        </i>
    )
}

export default MenuToggle;