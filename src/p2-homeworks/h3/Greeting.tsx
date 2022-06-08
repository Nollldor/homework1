import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyHandler: (e:KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onKeyHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : "" // need to fix with (?:)

    return (
        <div className={s.greetings}>
            <input value={name} onChange={setNameCallback} onKeyDown={onKeyHandler} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span> Total users: {totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
