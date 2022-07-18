import {UserType} from "../HW8";

type SortUpAT = {
    type: 'sort'
    payload: 'up'
}

type SortDownAT = {
    type: 'sort'
    payload: 'down'
}

type CheckAT = {
    type: 'check'
    payload: number
}

export const SortAC = (payload: "up" | "down"): SortUpAT | SortDownAT => {

    return {
        type: 'sort',
        payload
    }
}

export const CheckAC = (payload: number): CheckAT => {

    return {
        type: 'check',
        payload
    }
}

export type ActionTypes = CheckAT | SortUpAT | SortDownAT

export const homeWorkReducer = (state: UserType[], action: ActionTypes): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const newState = [...state]
            if (action.payload === "up") {
                newState.sort((a, b) => a.name.localeCompare(b.name))
            } else if (action.payload === "down") {
                newState.sort((a, b) => b.name.localeCompare(a.name))
            }
            return newState
        }
        case 'check': {
            return [...state.filter(u => u.age > action.payload)]
        }
        default:
            return state
    }
}