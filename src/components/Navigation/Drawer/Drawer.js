import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './Drawer.module.css';

const links = [1,2,3];


class Drawer extends React.Component{


    RenderLinks=() => {
        return links.map((link,index)=> {
                    return(
                        <li key={index}>
                            <a>Link {link}</a>
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