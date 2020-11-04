import React from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './QuizCreator.module.css'

export default class QuizCreator extends React.Component{

    //todo:Доделать логику компонента: начать с state и добавлением в него и на страницу вопросов

    state = {
        quizs: [], //{questionId:int, question: string, answers:[{text:'', ansId:1},...], tryAnswerId: int}
        currentFormQuiz:[
            {}
        ]
    }

    onSubmitHandler = (ev) => {
        ev.preventDefault();
    }

    addQuestionHandler = () => {

    }

    renderQuestion = () => {
        return(
            <div className="questionWrapper">
                <Input label='Вопрос'/>
                <hr/>
                <span><strong>Варианты ответов:</strong></span>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
                <Input inputType='number' label='Правильный ответ'/>
            </div>
        )
    }





    render(){

        return(

            <div className={classes.QuizCreator}>
                <h1>Создание теста</h1>

                <form onSubmit={this.onSubmitHandler}>
                    {/* {this.addQuestionHandler()} */}
                    <div className={classes.buttonsWrapper}>
                        <Button type="primary" onClick={this.addQuestionHandler}>Добавить вопрос</Button>
                        <Button type="success">Создать тест</Button>
                    </div>
                </form>
            </div>
        )
    }
}