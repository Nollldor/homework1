export type loadingStateType = {
    isLoading: boolean
}

const initState: loadingStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingAT): loadingStateType  => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.payload.isLoading}
        }
        default: return state
    }
}

type loadingAT = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => ({
    type: 'LOADING',
    payload: {
        isLoading: isLoading
    }
}) // fix any