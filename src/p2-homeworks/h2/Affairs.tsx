import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={() => props.deleteAffairCallback(a._id)}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    } // need to fix
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div className={s.affairs}>

            {mappedAffairs}

            <div className={s.priorityButtons}>
                <SuperButton className={s.priorityButtonsItem} disabled={props.filter === "all"}
                             onClick={setAll}>All</SuperButton>
                <SuperButton className={s.priorityButtonsItem} disabled={props.filter === "high"}
                             onClick={setHigh}>High</SuperButton>
                <SuperButton className={s.priorityButtonsItem} disabled={props.filter === "middle"}
                             onClick={setMiddle}>Middle</SuperButton>
                <SuperButton className={s.priorityButtonsItem} disabled={props.filter === "low"}
                             onClick={setLow}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
