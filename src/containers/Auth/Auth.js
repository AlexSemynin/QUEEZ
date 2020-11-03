import React from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';

export default class Auth extends React.Component{


    submitAuth = ev =>{
        ev.preventDefault();
    }

    loginHandler = ()=>{

    }
    registerHandler = ()=>{
        
    }

    render(){

        return(

            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form onSubmit={this.submitAuth}>
                        <input type='text'/>
                        <input type='text'/> 
                        <div className="wrapperButton">
                            <Button
                                type="success"
                                onClick={this.loginHandler}
                            >Авторизоваться</Button>
                            <Button
                                type="primary"
                                onClick={this.registerHandler}
                            >Зарегистрироваться</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}