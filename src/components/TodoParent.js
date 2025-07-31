import { useState } from "react";
import { TodoChild } from "./TodoChild";

export function TodoParent(){
    const [todos, setTodos] = useState([
            {id:1, text: 'Buy groceries', done:false},
            {id:2, text: 'Go to walk', done:false}
        ]) 
    const [newTodo, setNewTodo] = useState("")

    const handleAdd = (e) => {
        e.preventDefault();
        //validation
        if(newTodo.trim()==='') return;
        const newTodoItem = {
            id: Date.now(),
            text: newTodo,
            done: false
        }
        setTodos( [...todos, newTodoItem] )
        setNewTodo("")
    }
        const toggleDone = (id) => {
        const newTodoList = todos.map( todo => (
            todo.id === id ? { ...todo, done:!todo.done} : todo
        ))
        setTodos(newTodoList)
    }

    return(
        <>
            <TodoChild 
                todos={todos} 
                setTodos={setTodos} 
                handleAdd={handleAdd} 
                newTodo={newTodo}
                setNewTodo={setNewTodo}
                toggleDone={toggleDone}
            />
        </>
    )
}