import react from 'react';


const ErrorModal = (props)=>{
    const clickHandler = ()=>{
        props.onConfirm();
    }
    return(
        <div>
            <header>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p>{props.message}</p>
            </div>
            <footer>
                <button onClick={clickHandler}>Okay</button>
            </footer>
        </div>
    )
}
export default ErrorModal;