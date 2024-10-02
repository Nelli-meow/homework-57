import * as React from 'react';
import { IUser } from '../../types';

interface IUserItemProps {
  user: IUser,
}

const UserItem: React.FC<IUserItemProps> = ({user}) => {
  return (
    <div className="col-6">
      <div className="card">
        <div className="p-2 ">
          <h3 className="user-name d-inline px-2 fs-2">{user.name}</h3>
          <span className="px-2 fs-4">{user.roles}</span>
          <span className="user-active" style={{color: user.active ? 'green' : 'red'}}>
             {user.active ? 'ON' : 'OFF'}
          </span>
        </div>
        <p className="user-email">{user.email}</p>
      </div>
    </div>
  );
};

export default UserItem;