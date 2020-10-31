import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';


const ActiveQuiz = (props) => {
    return(
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>4.</strong> &nbsp;
                    {props.quiz.question}    
                </span>
                <small>4/12</small>
            </p>
            <AnswersList 
                answers={props.quiz.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    )

};

export default ActiveQuiz;