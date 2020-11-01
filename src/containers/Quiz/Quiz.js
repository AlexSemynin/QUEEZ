import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';


class Quiz extends React.Component{
    //основной контейнер для отрисовки тестового поля

    state={
        answerNumber: 0,
        quiz: [
            { 
                questionId: 1,
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
                questionId: 2,
                question: "Вопрос2?",
                answers:[
                    {text: "Ответ2_1", ansId:1},
                    {text: "Ответ2_2", ansId:2},
                    {text: "Ответ2_3", ansId:3},
                    {text: "Ответ2_4", ansId:4}
                ],
                tryAnswerId: 1
            }
        ]
    }


    onAnswerClickHAndler = (answerId) => {
        this.setState({
            answerNumber: this.state.answerNumber + 1
        });
    }


    render(){

        const answerNumber = this.state.answerNumber;
        return(
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>QUIZ</h1>
                    <ActiveQuiz 
                        quiz = {this.state.quiz[answerNumber]}
                        onAnswerClick = {this.onAnswerClickHAndler}
                        answerNumber = {answerNumber}
                        quizCount = {this.state.quiz.length}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;