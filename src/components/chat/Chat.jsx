import { useState } from 'react';
import './chat.scss';

const Chat = () => {
  const [chat, setchat] = useState(false);
  return (
    <section className='chat'>
      <div className='messages'>
        <h1>Messages</h1>
        {new Array(5).fill(1).map((item, index) => {
          return (
            <div key={index} className='message' onClick={() => setchat(true)}>
              <img
                src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=''
              />
              <span>John Doe</span>
              <p>Lorem ipsum dolor sit, amet...</p>
            </div>
          );
        })}
      </div>
      {chat && (
        <div className='chatbox'>
          <div className='top'>
            <div className='user'>
              <img src='' alt='' />
              <p>John Doe </p>
            </div>
            <span className='close' onClick={() => setchat(false)}>
              X
            </span>
          </div>
          <div className='center'>
            <div className='chatmessage'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
              <span>
                <b>1 hour Ago</b>
              </span>
            </div>
            <div className='chatmessage own'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
              <span>
                <b>1 hour Ago</b>
              </span>
            </div>
            <div className='chatmessage'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
              <span>
                <b>1 hour Ago</b>
              </span>
            </div>
            <div className='chatmessage own'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
              <span>
                <b>1 hour Ago</b>
              </span>
            </div>
            <div className='chatmessage'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
              <span>
                <b>1 hour Ago</b>
              </span>
            </div>
            <div className='chatmessage own'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
              <span>
                <b>1 hour Ago</b>
              </span>
            </div>
            <div className='chatmessage'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
              <span>
                <b>1 hour Ago</b>
              </span>
            </div>
            <div className='chatmessage own'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
              <span>
                <b>1 hour Ago</b>
              </span>
            </div>
          </div>
          <div className='bottom'>
            <textarea name='' id=''></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Chat;
