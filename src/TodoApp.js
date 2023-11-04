import React, {useState} from 'react'

function TodoApp() {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])
    const [todoCount, setTodoCount] = useState(0)

    const handleAdd = () => {
        const newTodos = [...todos]
        newTodos.push({
            key: todoCount,
            value: input

        })
        setTodos(newTodos)
        setInput("")
        setTodoCount(todoCount + 1)
        // setTodoCount((prev) => {return(prev + 1)})
        // setTodoCount(prev => prev + 1)
    }

    const handleDelete = (id) => {
        setTodos(prev => prev.filter((i) => i.key !== id))
    }

    return (
        <div>
            <h1>Todo App</h1>
            <input value={input} onChange={(e)=> setInput(e.target.value)} />
            <button onClick={handleAdd} >Add</button>
            {
                todos.map((i) => {
                    return <p>{i.value}<button onClick={() => handleDelete(i.key)}>Delete</button></p>
                })
            }
        </div>
    )
}

export default TodoApp;