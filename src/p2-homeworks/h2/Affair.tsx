import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affair}>
            <span className={s.affairName}>{props.affair.name} </span>

            <span className={s.affairPriority}>{props.affair.priority}</span>

            <SuperButton className={s.affairButton} onClick={deleteCallback} red={true}>X</SuperButton>
        </div>
    )
}

export default Affair
