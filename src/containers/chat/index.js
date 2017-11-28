import React, { Component } from 'react';

import './index.css';

class Chat extends Component {
    render() {
        return (
            <div className="messages-container">
                <div className="message-list">
                </div>
                <div className="message-actions">
                    <div className="message-input-container">
                        <textarea className="message-input" placeholder="Enter a message...">
                        </textarea>
                    </div>
                    <div className="message-button-container">
                        <button className="message-button">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Chat;