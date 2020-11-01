import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = (props) =>{

    const cls = [classes.AnswerItem];

    if(props.state){
        cls.push(classes[props.state]);
    }

    return(
        <li 
            className={cls.join(" ")}
            onClick={props.onAnswerClick.bind( null, props.answer.ansId)}
        >
            {props.answer.text}
        </li>
    );
};

export default AnswerItem;