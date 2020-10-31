import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';


class Quiz extends React.Component{
    //основной контейнер для отрисовки тестового поля

    state={
        quiz: [],
    }
    render(){

        return(
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>QUIZ</h1>
                    <ActiveQuiz/>
                </div>
            </div>
        );
    }
}

export default Quiz;