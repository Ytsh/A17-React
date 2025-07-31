import { useState } from "react";

function Todoist(){
    const [todos, setTodos] = useState([
        {id:1, text: 'Buy groceries', done:false},
        {id:2, text: 'Go to walk', done:false}
    ]) 
    const [newTodo, setNewTodo] = useState("")

    const toggleDone = (id) => {
        const newTodoList = todos.map( todo => (
            todo.id === id ? { ...todo, done:!todo.done} : todo
        ))
        setTodos(newTodoList)
    }
    
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
// id:1, text: 'Buy groceries', done:false
    return(
        <>
            <h2>Todo-List</h2>
            <form onSubmit={handleAdd}>
                <input 
                    type="text"
                    placeholder="Enter new todo item"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {
                    todos.map( todo => (
                        <li
                        key={todo.id}
                        onClick={() => toggleDone(todo.id)}
                        style={{
                            cursor: 'pointer',
                            color: todo.done? 'green' : 'red',
                            textDecoration: todo.done? 'line-through':'none'
                        }}
                        >
                            {todo.text}
                        </li>
                    ) )
                }
            </ul>
        </>
    )
}
export default Todoist;