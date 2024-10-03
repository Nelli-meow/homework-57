import "./App.css";
import UserForm from './components/UserForm/UserForm.tsx';
import Users from './components/Users/Users.tsx';
import { useState } from 'react';
import { IUser } from './types';

const App = () => {

  const [user, setUser] = useState<IUser[]>([]);

  const addNewUser = (newUser: IUser) => {
    setUser(prevState => [...prevState, newUser]);
  }

  return (
    <div className="container row">
      <UserForm addNewUser={addNewUser} />
      <div className="row col-6">
        <Users users={user}/>
      </div>
    </div>
    );

}


export default App;
