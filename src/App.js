import React from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import { useState } from 'react';


function App() {
  const [ users, setUsers ] = useState([]);

  const onAddUser = (newUser) => {
    setUsers(preUsers => [...preUsers, newUser]);
  }
  return (
    <div>
      <AddUser onAddUser={onAddUser}/>
      <UserList users={users}/>

    </div>
  );
}

export default App;
