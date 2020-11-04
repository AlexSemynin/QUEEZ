import React from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends React.Component{

    state = {
        formControls:{
            email:{
                value: '',
                type: 'email',
                label: 'EMAIL',
                errorMessage: 'Введите корректный email',
                valid: false,
                toched: false,
                validation: {
                    requied: true,
                    email: true
                }
            },
            password:{
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                toched: false,
                validation: {
                    requied: true,
                    minLength: 6
                }
            }
        }
    }

    submitAuth = ev =>{
        ev.preventDefault();
    }

    loginHandler = ()=>{

    }
    registerHandler = ()=>{

    }


    renderInputs(){
        return Object.keys(this.state.formControls).map((controlName,index)=>{
            const control = this.state.formControls[controlName];
            return(
                <Input
                    key={controlName + index}
                    value={control.value}
                    inputType={control.type}
                    label={control.label}
                    invalidText={control.errorMessage}
                    valid={control.errorMessage}
                    toched={control.toched}
                    shouldValidate={!!control.validation}
                    onChange={(ev) => this.onChangeHandler(ev,controlName)}
                />
            )
        });
    }

    onChangeHandler = (ev, controlName) => {
        console.log(`${controlName}: ${ev.target.value}`);

        this.setState({
            
        })
    }

    render(){

        return(

            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form onSubmit={this.submitAuth}>
                        {this.renderInputs()}
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