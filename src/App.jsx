import { useState } from 'react'
import {ChatInput} from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';
import './App.css'


function App(){
            
  const [chatMessages,setChatMessages] = useState([{
      message:'hello Chatbot',
      sender:'user',
      id:'id1'
  },{
      message:'Hello! How can I help you?',
      sender:'robot',
      id:'id2' 
  }
  ]);

  return (
      <div className="app-container">
          <ChatMessages 
              chatMessages={chatMessages}
          />
          <ChatInput 
              setChatMessages={setChatMessages}
              chatMessages={chatMessages}
          />
      </div>
  );  
}


export default App
