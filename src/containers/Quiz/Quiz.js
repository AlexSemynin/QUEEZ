import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';


class Quiz extends React.Component{
    //основной контейнер для отрисовки тестового поля

    state={
        quiz: [
            { 
                question: "Вопрос1?",
                answers : [
                    {text: "Ответ1_1"},
                    {text: "Ответ1_2"},
                    {text: "Ответ1_3"},
                    {text: "Ответ1_4"},
                ],
                tryAnswer: 3
            },
            {
                question: "Вопрос2?",
                answers:[
                    {text: "Ответ2_1"},
                    {text: "Ответ2_2"},
                    {text: "Ответ2_3"},
                    {text: "Ответ2_4"}
                ],
                tryAnswer: 3
            }
        ]
    }
    render(){

        return(
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>QUIZ</h1>
                    <ActiveQuiz quiz={this.state.quiz[0]} />
                </div>
            </div>
        );
    }
}

export default Quiz;