import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinisedQuiz/FinisedQuiz';


class Quiz extends React.Component{
    //основной контейнер для отрисовки тестового поля

    state={
        quizNumber: 0,
        answerState: null, //{currentAnswerId: 'error'}
        quiz: [
            {
                isFinised: false,
                questionId: 0,
                question: "Какого цвета небо?",
                answers : [
                    {text: "any", ansId:0},
                    {text: "grey", ansId:1},
                    {text: "black", ansId:2},
                    {text: "blue", ansId:3},
                ],
                tryAnswerId: 0
            },
            {
                questionId: 1,
                question: "В каком году основали Питер?",
                answers:[
                    {text: "1700", ansId:0},
                    {text: "1701", ansId:1},
                    {text: "1702", ansId:2},
                    {text: "1703", ansId:3}
                ],
                tryAnswerId: 3
            }
        ]
    }

    OnAnswerClickHAndler = (answerId) => {

        if(this.state.answerState){
            return;
        }

        if(answerId == this._GetCurrentQuiz().tryAnswerId){
            this.setState({
                answerState: {[answerId]: 'success'}
            });
        }else{
            this.setState({
                answerState: {[answerId]: 'error'}
            });
        }

        if(this._IsLastQuiz()){
            const timer = window.setTimeout(()=>{
                this.setState({
                    isFinised: true
                });
            }, 1000);
        }else{

            const timer = window.setTimeout(() => {
                
                this.setState({
                    quizNumber: this.state.quizNumber + 1,
                    answerState: null
                });

                window.clearTimeout(timer); //чтобы не было утечки памяти
            }, 1000);
        }
    }

    _IsTrueAnswer(quiz, answId){
        return quiz.tryAnswerId === answId;
    }

    _GetCurrentQuiz = () =>{
        return this.state.quiz[this.state.quizNumber];
    } 
    _IsLastQuiz = () => {
        return this.state.quizNumber === this.state.quiz.length-1;
    }

    

    render(){

        const quizNumber = this.state.quizNumber;

        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>QUIZ</h1>
                    {
                        this.state.isFinised ?
                            <FinishedQuiz
                            
                            />
                            :
                            <ActiveQuiz 
                                quiz = {this.state.quiz[quizNumber]}
                                onAnswerClick = {this.OnAnswerClickHAndler}
                                quizNumber = {quizNumber}
                                quizCount = {this.state.quiz.length}
                                answerState = {this.state.answerState}
                            />
                    }
                </div>
            </div>
        );
    }
}

export default Quiz;