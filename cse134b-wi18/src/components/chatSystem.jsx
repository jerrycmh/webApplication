import React, { Component } from 'react';
import '../css/styles.css';
import '../css/chatStyle.css';
import {Link, withRouter} from "react-router-dom";


class chatSystem extends Component {

    static TYPING_INDICATOR_STYLE = 'font-style: italic; margin: 10px; color: lightgrey;';

    constructor (props) {
        super(props);
        this.handleTypeMsgFormSubmit = this.handleTypeMsgFormSubmit.bind(this);
        this.addMsgThem = this.addMsgThem.bind(this);
        this.addMsgYou =this.addMsgYou.bind(this);
        this.fakeReply = this.fakeReply.bind(this);
    }

    componentDidMount() {
        const chats = window.getChats();

        console.log(chats);

        for (const chat of chats) {
            const who = chat.who;
            const text = chat.text;

            if (who == 'them') {
                this.addMsgThem(text);
            } else if (who == 'you') {
                this.addMsgYou(text);
            }
        }
    }

    handleTypeMsgFormSubmit(event) {
        event.preventDefault();

        const msg = this.inputTypeMsgBox.value;

        this.addMsgYou(msg);

        this.formTypeMsgForm.reset();

        setTimeout(() => this.pTypingIndicator.style = chatSystem.TYPING_INDICATOR_STYLE, 500);
        setTimeout(this.fakeReply, 2500);
    }



    addMsgThem(msg) {
        const divMsgBubbleContainer = document.createElement('div');
        const divMsgBubble = document.createElement('div');
        const pMsg = document.createElement('p');

        divMsgBubbleContainer.className = 'flex_box flex_row justify_start';
        divMsgBubble.className = 'trainer-bubble';
        pMsg.innerText = msg;

        divMsgBubble.appendChild(pMsg);
        divMsgBubbleContainer.appendChild(divMsgBubble);
        this.divChatContainer.appendChild(divMsgBubbleContainer);

        this.pTypingIndicator.style = 'display: none';
    }

    addMsgYou(msg) {
        const divMsgBubbleContainer = document.createElement('div');
        const divMsgBubble = document.createElement('div');
        const pMsg = document.createElement('p');

        divMsgBubbleContainer.className = 'flex_box flex_row justify_end';
        divMsgBubble.className = 'trainee-bubble';
        pMsg.innerText = msg;

        divMsgBubble.appendChild(pMsg);
        divMsgBubbleContainer.appendChild(divMsgBubble);
        this.divChatContainer.appendChild(divMsgBubbleContainer);
    }

    fakeReply() {
        fetch('https://icanhazdadjoke.com', {headers: {'Accept': 'application/json'}})
            .then(response => response.json())
            .then(json => this.addMsgThem(json['joke']));
    }

    render() {
        return (
            <div>
                <div id="chat_container" className ="flex_box flex_col" ref={ref => this.divChatContainer = ref}>
                    <h2 className = "flex_box flex_row ">Chat</h2>
                </div>
                <p id="typing_indicator" ref={ref => this.pTypingIndicator = ref}>John is typing...</p>
                <div className = "type_message">
                    <form id="type_msg_form" onSubmit={this.handleTypeMsgFormSubmit} ref={ref => this.formTypeMsgForm = ref}>
                        <input className = "text_box" name="message" type="text" id="type_msg_box" ref={ref => this.inputTypeMsgBox = ref}/>
                            <input type="submit" value=">" />
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(chatSystem);
