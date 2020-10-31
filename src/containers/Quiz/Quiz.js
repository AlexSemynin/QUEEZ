import React from 'react';
import classes from './Quiz.module.css';


class Quiz extends React.Component{
    //основной контейнер для отрисовки тестового поля

    state={
        quiz: [],
    }
    render(){

        return(
            <div className={classes.Quiz}>
                <h1>QUIZ</h1>
            </div>

        );
    }
}

export default Quiz;