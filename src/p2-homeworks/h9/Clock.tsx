import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        let secondsCounter = 1
        const id: number = window.setInterval(() => {
            console.log(date)
            if (!timerId) {
                setDate(new Date())
            } else {
                const nextDate = new Date(date.toISOString())
                nextDate.setSeconds(nextDate.getSeconds()+secondsCounter)
                secondsCounter++
                setDate(nextDate)
            }
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString() // fix with date
    const stringDate = date.toLocaleDateString() // fix with date

    return (
        <div>
            {Boolean(timerId) && (<div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>)
            }
            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
