import { useState } from 'react';

const AddUser = ({onAddUser}) => {

  const [ userName, setUserName ] = useState('');
  const [ userAge, setUserAge ] = useState('')

  const submitHandler = (event) => {
    event.preventDefault();
    const newUser = {name: userName, age: userAge};

    onAddUser(newUser);
  }

  return (
    <div className='addUserForm'>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input type='text' onChange={(event) => setUserName(event.target.value)}></input>
        <label>Age (years)</label>
        <input type='number' onChange={(event) => setUserAge(event.target.value)}></input>
        <button type='submit'>Add User</button>
      </form>
    </div>
  )
}

export default AddUser;