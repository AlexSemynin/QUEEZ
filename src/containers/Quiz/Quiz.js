import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import AnswerItem from '../../components/ActiveQuiz/AnswersList/AnswerItem/AnswerItem';


class Quiz extends React.Component{
    //основной контейнер для отрисовки тестового поля

    state={
        quiz: [
            { 
                question: "Вопрос1?",
                answers : [
                    {text: "Ответ1_1", ansId:1},
                    {text: "Ответ1_2", ansId:2},
                    {text: "Ответ1_3", ansId:3},
                    {text: "Ответ1_4", ansId:4},
                ],
                tryAnswerId: 3
            },
            {
                question: "Вопрос2?",
                answers:[
                    {text: "Ответ2_1", ansId:1},
                    {text: "Ответ2_2", ansId:2},
                    {text: "Ответ2_3", ansId:3},
                    {text: "Ответ2_4", ansId:4}
                ],
                tryAnswerId: 3
            }
        ]
    }


    onAnswerClickHAndler = (answerId) => {
        console.log(answerId);
    }


    render(){

        return(
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>QUIZ</h1>
                    <ActiveQuiz 
                        quiz={this.state.quiz[0]}
                        onAnswerClick= {this.onAnswerClickHAndler} 
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;