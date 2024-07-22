import { useEffect, useState } from 'react';
import './profile.scss';
import UserList from '../../components/userlist/UserList';
import Chat from '../../components/chat/Chat';

const Profile = () => {
  return (
    <section className='profilePage'>
      <div className='details'>
        <div className='wrapper'>
          <div className='title'>
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>

          <div className='info'>
            <span>
              Avatar:
              <img
                src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=''
              />{' '}
            </span>
            <span>
              Username:
              <b>John Doe</b>
            </span>
            <span>
              E-mail:
              <b>John@gmial.com</b>
            </span>
          </div>
          <div className='title'>
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <UserList />
          <div className='title'>
            <h1>Saved List</h1>
          </div>
          <UserList />
        </div>
      </div>
      <div className='chatContainer'>
        <div className='wrapper'>
          <Chat />
        </div>
      </div>
    </section>
  );
};

export default Profile;
