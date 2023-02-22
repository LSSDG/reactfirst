import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { useState } from 'react';
 

function App() {
  const [usersList,setUsersList] = useState([]);

  const addUsers=(name,age)=>{
    setUsersList(prevsUsersList=>{
      return [...prevsUsersList,{name:name,age:age,id:Math.random().toString()}];
    });

  }

  return (
    <div className="App">
      <AddUser onAddUser={addUsers} />
      <UsersList users={usersList}/>
       
    </div>
  );
}

export default App;
