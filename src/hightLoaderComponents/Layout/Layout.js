import React from 'react';
import classes from './Layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';


class Layout extends React.Component{

    state={
        isOpen: false
    }

    onToggleHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <div className={classes.Layout}>

                <Drawer
                    isOpen={this.state.isOpen}
                    onClose={this.onToggleHandler}
                />
                <MenuToggle
                    onMenuToggle={this.onToggleHandler}
                    isOpen={this.state.isOpen}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout