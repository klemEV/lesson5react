import React from 'react';
import MessageListPage from './MessageListPage';

const ChatListPage = () => {
    const [chatlist, setChatList] = useState([
        {
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Joe'
        },
        {
            id: 3,
            name: 'Ash'
        }
    ]);

    return (
        <div>
            {chatlist.map((chat) => {
                return(
                    <Link style={{display: 'block'}} to={`/message/`} key={chat.id}>
                        {chat.name}
                    </Link>
                )
            })}
        </div> 
    );
};

export default ChatListPage;