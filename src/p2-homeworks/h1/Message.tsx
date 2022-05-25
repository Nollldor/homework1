import React from 'react'
import './Message.css'

type messageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

const Message = (props: messageDataType) => {
    return (
        <div className="message-wrap">
            <div className="message-avatar">
                <img className="message-avatar-img" src={props.avatar} alt="avatar"></img>
            </div>
            <div className="message-body">
                <div className="message-body-left">
                    <div className="message-name">{props.name}</div>
                    <div className="message-text">{props.message}</div>
                </div>
                <div className="message-body-right">
                    <div className="message-time">{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
