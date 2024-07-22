import React from 'react';
import { listData } from '../../api/fakeData';
import './userlist.scss';
import Cards from '../card/Cards';

const UserList = () => {
  return (
    <section className='cardItems'>
      {listData.map((item) => {
        return <Cards key={item.id} item={item} />;
      })}
    </section>
  );
};

export default UserList;
