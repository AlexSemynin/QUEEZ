import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './Drawer.module.css';
import {Route, NavLink} from 'react-router-dom';

const links = [
    {to: '/', label:'Список', exact: true},
    {to: '/auth', label:'Авторизация', exact: false},
    {to: '/quiz-creator', label:'Создать тест', exact: false}
];


class Drawer extends React.Component{


    RenderLinks=() => {
        return links.map((link,index)=> {
                    return(
                        <li key={index}>
                            <NavLink 
                                to={link.to}
                                exact={link.exact}
                                activeClassName={classes.activeLi}
                                onClick={this.props.onClose.bind()}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    )
                })
        
    }

    render(){

        const cls = [
            classes.Drawer
        ]

        if(!this.props.isOpen){
            cls.push(classes.close);
        }

        return(
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.RenderLinks()}
                    </ul>
                </nav>
                {
                    this.props.isOpen ? 
                        <Backdrop
                            onClose={this.props.onClose}
                        />
                        :
                        null
                }
            </React.Fragment>
        )
    }
}

export default Drawer;