import * as React from 'react';
import { IUser, IUserMutation } from '../../types';
import { useState } from 'react';

interface addNewUserProps {
  addNewUser: (newUser: IUser) => void;
}

const UserForm: React.FC<addNewUserProps> = ({addNewUser}) => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: '',
    email: '',
    active: false,
    roles: '',
  });

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;
    setNewUser(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? e.target.checked : value,
    }));
  }

  const changeActiveStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser(prevState => ({
      ...prevState,
      active: e.target.checked,
    }));
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newUser.name.trim().length === 0) {
      alert('Enter valid name');
    } else if (!newUser.roles) {
      alert('Please select a role');
    } else {
      addNewUser({
        id: String(new Date()),
        ...newUser,
      });
      setNewUser({
        name: '',
        email: '',
        active: false,
        roles: '',
      });
    }
  }

  return (
    <div className="col-6 border-end">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            onChange={changeUser}
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={newUser.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            onChange={changeUser}
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={newUser.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role:</label>
          <select
            onChange={changeUser}
            name="roles"
            id="roles"
            className="form-select form-select-sm"
            value={newUser.roles}
          >
            <option value="" disabled>Select a role</option>
            <option value="admin">Administrator</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input
            onChange={changeActiveStatus}
            type="checkbox"
            className="form-check-input float-none"
            id="checkBox"
            name="active"
            checked={newUser.active}
          />
          <label className="form-check-label px-2" htmlFor="checkBox">Active mode</label>
          <span style={{
            marginLeft: '10px',
            color: newUser.active ? 'green' : 'red'
          }}>
            {newUser.active ? 'ON' : 'OFF'}
          </span>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
