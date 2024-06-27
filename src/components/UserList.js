const UserList = ({users}) => {
  return (
    <ul>
      {users.map((user) => (<li key={user.age}>{user.name} ({user.age} years old)</li>))}
    </ul>
  )
}

export default UserList;