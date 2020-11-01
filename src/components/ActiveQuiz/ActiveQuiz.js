import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';


const ActiveQuiz = (props) => {
    return(
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.answerNumber + 1}.</strong> &nbsp;
                    {props.quiz.question}    
                </span>
                <small>{props.answerNumber + 1} из {props.quizCount}</small>
            </p>
            <AnswersList 
                answers={props.quiz.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    )

};

export default ActiveQuiz;