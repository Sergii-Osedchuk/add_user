import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = () => {
  const [ userName, setUserName ] = useState('');
  const [ userAge, setUserAge ] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
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
        <input type='text' id='username' onChange={userNameInputHandler}></input>
        <label htmlFor="userage">UserAge</label>
        <input type='text' id='userage' onChange={userAgeInputHandler}></input>
        <Button type='submit'>Add user</Button>
      </form>
    </Card>
  )
}

export default AddUser;