import React, {useState, Fragment, useEffect} from 'react'
import firebase from "./utils/firebaseConfig";
import Todo from "./TodoLi";
import TodoForm from "./TodoForm";
export default function TodoIndex(){

    const [todos, setTodos] = useState([
    ]);

    useEffect(()=>{
        const db = firebase.database().ref("users");
        db.on("value", (snap)=>{
            const dataDB = snap.val();
            const tableauTemporaire = [];
            for(let singleElement in dataDB){
                tableauTemporaire.push({id: singleElement , ...dataDB[singleElement]});
            }
            setTodos(tableauTemporaire);
            // Boucler sur l'objet / snapshot renvoyer par la DB
            /*
            for (let uneValeur in Objet) {

            }
            var obj = {a:1, b:2, c:3};
                for(let in obj) {
                  console.log(obj[i]);
                }
                // 1
                // 2
                // 3
            */
        })
    }, []);

    const completeTodo = index => {
        const newTodos = [...todos];
        setTodos(newTodos);

        if(newTodos[index].isCompleted === false){
            newTodos[index].isCompleted = true;
        } else {
            newTodos[index].isCompleted = false;
        }
    };
    const deleteTodo = id => {
        const db = firebase.database().ref("users").child(id);
        db.remove();
    }
    return(
        <Fragment>
            <h1 aria-level="1" role="heading">
                TO DO LIST
            </h1>
            <section>
                <h2 aria-level="2" role="heading">
                    Ma liste :
                </h2>
                <ul>
                    {
                        todos.map((todo, index) => (
                            <Todo
                                todo={todo}
                                key={index}
                                id={todo.id}
                                text={todo.text}
                                index={index}
                                completeTodo={completeTodo}
                                deleteTodo={deleteTodo}
                            />
                        ))
                    }
                </ul>

                <TodoForm />
            </section>
        </Fragment>
    )

}