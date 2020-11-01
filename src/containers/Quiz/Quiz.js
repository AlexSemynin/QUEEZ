import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinisedQuiz/FinisedQuiz';


class Quiz extends React.Component{
    //основной контейнер для отрисовки тестового поля

    state={
        quizNumber: 0,
        answerState: null, //{{currentAnswerId}: 'error'}
        results: [], //{key:quizId, result: "error" || success}
        isFinised: false,
        quiz: [
            {
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
            //не воспринимать второй клик пока асинк таймер
            return;
        }

        //логика проверки ответа: для показать клиенту, зафиксировать ответ
        this._CheckAndRemember(answerId);

        //логика переключения вопросов
        if(this._IsLastQuiz()){
            const timer = window.setTimeout(()=>{
                this.setState({
                    isFinised: true
                });
                window.clearTimeout(timer);
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

    TryAgain = () => {
        this.setState({
            quizNumber: 0,
            isFinised: false,
            answerState: null,
            results:[]
        });
    }

    _CheckAndRemember = (answerId) =>{
        const result = answerId === this._GetCurrentQuiz().tryAnswerId ? 
            "success" :
            "error";
        const results = this.state.results.concat();//[...this.state.results];
        results.push({
            "key":this._GetCurrentQuiz().questionId,
            "result": result
        }); //Создать модель сосотяния ответа на вопрос

        this.setState((prevState) => {
            return{
                answerState: {[answerId]: result},
                results: results
            }
        });
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
                                results = {this.state.results}
                                quizs = {this.state.quiz}
                                onTryAgain = {this.TryAgain}
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