import { useState } from "react"

export function TodoChild({todos,setTodos,handleAdd,newTodo, setNewTodo, toggleDone}){
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