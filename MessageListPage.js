import React from 'react';

const MessageListPage = () => {
    const [messageList, setMessageList] = useState([
        {
            id: 1,
            text: 'How are u?',
            chatId: 2
        },
        {
            id: 2,
            text: 'Where are u?',
            chatId: 2
        },
        {
            id: 3,
            text: 'Who are u?',
            chatId: 1
        },
        {
            id: 3,
            text: 'How are u?',
            chatId: 1
        }
    ])
    return (
        <div>
        {messageList.map((message) => {
            return(
                <div key={message.id}>
                    {message.text}
                </div>
            )
        })}
        </div>
    );
};

export default MessageListPage;