import React from 'react';
import classes from './FinisedQuiz.module.css'

const FinisedQuiz = (props) => {
    return(
        <div className={classes.FinisedQuiz}>
            <ul>
                <li>
                    <strong>1.&nbsp;</strong>
                    какого цвета?
                    <i className={'fa fa-times ' + classes.error}></i>
                </li>
                <li>
                <strong>2.&nbsp;</strong>
                    в каком гожу?
                    <i className={'fa fa-check success ' + classes.success}></i>
                </li>
            </ul>

            <p>правильно 1 из 2</p>
            <button>Повторить</button>
        </div>
    )
}

export default FinisedQuiz;