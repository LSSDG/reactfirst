import react , {useState} from 'react';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props)=>{

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [error,setError] = useState();

    const addUserHandler = (e)=>{
        e.preventDefault();
        if(name.trim().length===0 || age.trim().length===0){
            setError({
                title:'InvalidInput',
                message:'ENter a valid name and age'
            })
            return;
        }
        if(age<1){
            setError({
                title:'InvalidInput',
                message:'ENter a valid  age'
            })
            return;
        }
        console.log(name,age)
        props.onAddUser(name,age);

        setAge('');
        setName('');
         

    }
    const nameChangeHandler = (e)=>{
        console.log('cha');
        setName(e.target.value);

    }
    const ageChangeHandler = (e)=>{
        setAge(e.target.value);

    }

    const errorHandler =()=>{
        setError(null);
    }



    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <form onSubmit={addUserHandler}>
                <label htmlFor='name'>NAME</label>
                <input type ='text' id='name' value={name} onChange={nameChangeHandler}></input>
                <label htmlFor='age'>AGE</label>
                <input type='number' id='age' value={age} onChange={ageChangeHandler}/>
                <button type ='submit' >ADD USER</button>
            </form>
            
        </div>
    )
}

export default AddUser;