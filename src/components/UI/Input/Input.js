import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {

    const inputType = props.inputType || 'text';
    const cls = [
        classes.Input,
    ];
    const htmlFor = `${inputType}-${Math.random()}`;

    function IsValid(){
        return true;
    }


    return(
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label  }</label>
            <input
                id={htmlFor}
                type={inputType}
                onChange={props.onChange?.bind()}
                value={props.value}
            />
            {
                IsValid() ? null : 
                    <span>{props.invalidText}</span>
            }
        </div>
    )
}

export default Input;