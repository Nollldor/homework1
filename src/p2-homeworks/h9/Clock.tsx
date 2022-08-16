import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        let nextDate
        let secondsCounter = 1
        const id: number = window.setInterval(() => {
            if (date) {
                nextDate = new Date(date.toISOString())
                nextDate.setSeconds(nextDate.getSeconds() + secondsCounter)
            } else {
                nextDate = new Date()
            }

            setDate(nextDate)
            secondsCounter++
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString() // fix with date
    const stringDate = date?.toLocaleDateString() // fix with date

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
