import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {

    const inputType = props.inputType || 'text';
    const cls = [
        classes.Input,
    ];
    const htmlFor = `${inputType}-${Math.random()}`;

    function IsInvalid({valid, toched, shouldValidate }){
        return !valid && toched && shouldValidate;
    }

    if(IsInvalid(props)){
        cls.push(classes.IsInvalid)
    }

    return(
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label  }</label>
            <input
                id={htmlFor}
                type={inputType}
                onChange={props.onChange}
                value={props.value}
            />
            {
                IsInvalid(props) ? 
                    <span>{props.invalidText || "Введите верное значение"}</span>
                    : null
            }
        </div>
    )
}

export default Input;