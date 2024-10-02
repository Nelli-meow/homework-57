import * as React from 'react';
import { IUser } from '../../types';
import UserItem from '../UserItem/UserItem.tsx';

interface Props {
  users: IUser[];
}

const Users: React.FC<Props> = ({users}) => {
  return (
   <>
     {users.map(user => (
       <UserItem
         key={user.id}
         user={user} />
     ))}
   </>
  );
};

export default Users;