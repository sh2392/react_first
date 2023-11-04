import React, {useState} from 'react'

function Todo() {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])
    const [todoCount, setTodoCount] = useState(0)
    const [inputEdit, setInputEdit] = useState("")

    const handleAdd = () => {
        const newTodos = [...todos]
        newTodos.push({
            key: todoCount,
            value: input,
            toggle: false,
            edit: false
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

    const handleToggle = (id) => {
        const newTodos = todos.map((i) => i.key !== id ? i : {...i, toggle:!i.toggle})
        setTodos(newTodos)
    }

    const handleEdit = (id) => {
        const newTodos = todos.map((i) => i.key !== id ? i : {...i, edit:!i.edit})
        setTodos(newTodos)
    }

    const handleUpdate = (id) => {
        const newTodos = todos.map((i) => i.key !== id ? i : {...i, value:inputEdit, edit:!i.edit})
        setTodos(newTodos)
        setInputEdit("")
    }

    const handleCancel = (id) => {
        const newTodos = todos.map((i) => i.key !== id? i: {key:i.key, value:i.value, toggle:i.toggle, edit:!i.edit})
        setTodos(newTodos)
    }

    return (
        <div>
            <h1>Todo App</h1>
            <input value={input} onChange={(e)=> setInput(e.target.value)} />
            <button onClick={handleAdd} >Add</button>
            {
                todos.map((i) => {
                    if (i.edit === false) {
                        return <p><span style={{textDecoration: i.toggle? 'line-through': 'none'}}>{i.value}</span>
                        <button onClick={() => handleToggle(i.key)}>Toggle Complete</button>
                        <button onClick={() => handleEdit(i.key)}>Edit</button>
                        <button onClick={() => handleDelete(i.key)}>Delete</button>
                        </p>
                    }
                    else {
                        return <p>
                            <input value={inputEdit} onChange={(e)=> setInputEdit(e.target.value)} />
                            <button onClick={() => handleUpdate(i.key)}>Update</button>
                            <button onClick={() => handleCancel(i.key)}>Cancel</button>
                        </p>
                    }
                    
                })
            }
        </div>
    )
}

export default Todo;