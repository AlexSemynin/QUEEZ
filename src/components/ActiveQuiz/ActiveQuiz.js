import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';


const ActiveQuiz = (props) => {
    return(
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.quizNumber + 1}.</strong> &nbsp;
                    {props.quiz.question}    
                </span>
                <small>{props.quizNumber + 1} из {props.quizCount}</small>
            </p>
            <AnswersList 
                answers={props.quiz.answers}
                onAnswerClick={props.onAnswerClick}
                answerState = {props.answerState}
            />
        </div>
    )

};

export default ActiveQuiz;