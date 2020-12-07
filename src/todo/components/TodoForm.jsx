import React, {useState} from 'react';
import firebase from "../../utils/firebaseConfig";

function TodoForm(){
    const [valueInput, setValueInput] = useState('');

    const handleSubmit = (e) =>{
        //on arrête le rechargement de la page
        e.preventDefault();
        const db = firebase.database().ref("users");
        db.push({
            text: valueInput,
            isCompleted:false
        })
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setValueInput(e.target.value)} placeholder="Nouvelles choses à faire..."/>
            <input type="submit" />
        </form>
    )
}
export default TodoForm;