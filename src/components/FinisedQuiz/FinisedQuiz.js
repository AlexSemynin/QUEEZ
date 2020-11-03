import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import classes from './FinisedQuiz.module.css'

const FinisedQuiz = (props) => {

    const trueAnswersCount = props.results.filter(result => result.result === "success").length;
    return(
        <div className={classes.FinisedQuiz}>
            <ul>
            {
                props.results.map((resulModel, index) => {

                    const faIcon = resulModel.result === "success" ?  "fa-check" : "fa-times";
                    const cls = [
                        'fa',
                        faIcon,
                        classes[resulModel.result]
                    ];

                    return(
                        <li key={index}>
                            <span>
                                <strong>{resulModel.key}.&nbsp;</strong>
                                {props.quizs[resulModel.key].question}
                                <i className={cls.join(" ")}></i>
                            </span>

                        </li>
                    )
                })
            }
            </ul>

            <p>Правильно {trueAnswersCount} из {props.results.length}</p>
            <Button 
                onClick={props.onTryAgain}
                type="primary"
            >Повторить</Button>
            {/* Можно и без bind() */}

            <Link to='/'>
                <Button
                    type={"success"}
                >
                    Вернуться в список тестов
                </Button>
            </Link>
        </div>
    )
}

export default FinisedQuiz;