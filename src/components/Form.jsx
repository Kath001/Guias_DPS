import React,{useState} from 'react';
import Todo from './Todo';

const Form = () => {
    const [todo, setTodo] = useState([
        {
            num: '',
            todo: ''
        }
    ])
    const [todos, setTodos] = useState([
        
    ])
    //const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleClick = e => {
        if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('El campo esta vacío')
            return
        }
        if (todo.num === undefined) {
            todo.num = '1'
        }
        setTodos([...todos, todo])
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }
    return (
        <>
        <form onSubmit = {e => e.preventDefault()}>
            <label>Agregar tarea</label><br />
            <input type="number" name="num" placeholder="1" defaultValue="1" onChange={(ev) => setTodo({...todo, num: ev.target.value})} />
            <input type="text" name="todo" placeholder="Producto" onChange={(ev) => setTodo({...todo, todo: ev.target.value})} />
            <button onClick={handleClick}>Agregar</button>
        </form>
        {
            todos.map((value, index) => (<Todo todo={value.todo} num={value.num} key={index} index={index} deleteTodo={deleteTodo} />))
        }
        </>
    )
}

export default Form