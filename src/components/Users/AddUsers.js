import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = () => {
  const [ userName, setUserName ] = useState('');
  const [ userAge, setUserAge ] = useState('');

  const onSubmitHandler = (event) => {
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }

    if (+userAge < 1) {
      return;
    }
    
    event.preventDefault();
    setUserAge('');
    setUserName('');
  }

  const userNameInputHandler = (event) => {
    setUserName(event.target.value);
  }

  const userAgeInputHandler = (event) => {
    setUserAge(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">UserName</label>
        <input 
          type='text' 
          id='username' 
          onChange={userNameInputHandler} 
          value={userName}
        ></input>
        <label htmlFor="userage">UserAge</label>
        <input 
          type='text' 
          id='userage' 
          onChange={userAgeInputHandler} 
          value={userAge}
        ></input>
        <Button type='submit'>Add user</Button>
      </form>
    </Card>
  )
}

export default AddUser;