import React from 'react'

function Todo(props){

    return(
        <div className="to-do-li">
            <li>
                {props.text}
            </li>
            <button onClick={() => props.completeTodo(props.id)}>Completer</button>
            <button onClick={ () => props.deleteTodo(props.id)}>Supprimer</button>
        </div>
    )
}
export default Todo;