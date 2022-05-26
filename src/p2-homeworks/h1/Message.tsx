import React from 'react'
import s from './Message.module.css'

type messageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

const Message = (props: messageDataType) => {
    return (
        <div className={s.messageWrap}>
            <div className={s.messageAvatar}>
                <img className={s.messageAvatarImg} src={props.avatar} alt="avatar"></img>
            </div>
            <div className={s.messageBody}>
                <div className={s.messageBodyLeft}>
                    <div className={s.messageName}>{props.name}</div>
                    <div className={s.messageText}>{props.message}</div>
                </div>
                <div className={s.messageBodyRight}>
                    <div className={s.messageTime}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
