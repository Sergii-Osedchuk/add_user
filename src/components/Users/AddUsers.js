import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = ({onAddUser}) => {
  const [ userName, setUserName ] = useState('');
  const [ userAge, setUserAge ] = useState('');
  const [ error, setError ] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter valid name and age'
      });
      return;
    }

    if (+userAge < 1) {
      setError({
        title: 'Invalid age input',
        message: 'Please enter valid age'
      });
      return;
    }

    onAddUser(userName, userAge);
 
    setUserAge('');
    setUserName('');
  }

  const userNameInputHandler = (event) => {
    setUserName(event.target.value);
  }

  const userAgeInputHandler = (event) => {
    setUserAge(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
      {error && <ErrorModal 
        title={error.title} 
        message={error.message}
        onConfirm={errorHandler}
      />}
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
    </>
  )
}

export default AddUser;