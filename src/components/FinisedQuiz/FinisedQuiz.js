import React from 'react';
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
            
            <p>правильно {trueAnswersCount} из {props.results.length}</p>
            <button>Повторить</button>
        </div>
    )
}

export default FinisedQuiz;