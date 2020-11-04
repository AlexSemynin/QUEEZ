import React from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends React.Component{

    state = {
        isFormValid: false,
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
                    valid={control.valid}
                    toched={control.toched}
                    shouldValidate={!!control.validation}
                    onChange={(ev) => this.onChangeHandler(ev,controlName)}
                />
            )
        });
    }

    onChangeHandler = (ev, controlName) => {
        const formControls = {...this.state.formControls}; // копировать контролы для дальнейшего их изменения easy 
        const control = formControls[controlName];
        control.toched = true;
        control.value = ev.target.value;
        control.valid = this.IsValidControl(ev.target.value, control.validation);
        
        
        const isAllControlValid = Object.keys(this.state.formControls).every(controlName => {
            const control = this.state.formControls[controlName]
            return control.valid;
        });



        this.setState({
            formControls: formControls,
            isFormValid: isAllControlValid
        })
    }

    IsValidControl(value, validation){
        if(!validation) return true; //если кнотрол не нужно валидировать

        let isValid = true; 

        if(validation.requied){
            isValid = value.trim() !== "";
        }
        if(validation.email){
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = re.test(String(value).toLowerCase());
        }
        if(validation.minLength){
            isValid = value.length >= validation.minLength;
        }

        return isValid;
    }

    IsAllControl

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
                                disabled={!this.state.isFormValid}
                            >Авторизоваться</Button>
                            <Button
                                type="primary"
                                onClick={this.registerHandler}
                                disabled={!this.state.isFormValid}
                            >Зарегистрироваться</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}