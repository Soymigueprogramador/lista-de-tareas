import { useState, useEffect } from "react";
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [tareas, setTareas] = useState(() => {
        const guardarTareas = localStorage.getItem("tareas"); 
        if (guardarTareas) {
            return JSON.parse(guardarTareas);
        } else {
            return [];
        }
    });
    const borrarTareas = (tareaABorrar) => {
        const actualizarTareas = tareas.filter(tarea => tarea !== tareaABorrar);
        setTareas(actualizarTareas);
    };
    const agregarNuevasTareas = (texto) => {
        setTareas([...tareas, texto]);
    };
    const manejarFormulario = (e) => {
        e.preventDefault();
        if (inputValue.trim()) { 
            agregarNuevasTareas(inputValue);
            setInputValue("");
        }
    };
    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);
    return (
        <div className="todo">
            <div>
            <h1 className="titulo">Lista de tareas</h1><br />
            <form onSubmit={manejarFormulario}>
                <input type="text" placeholder="Agregar tarea" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                <button className="agregar" type="submit">Agregar tarea</button>
            </form>
            <ul>
                {tareas.map((tarea, index) => (
                    <TodoItem
                        key={index}
                        tarea={tarea} 
                        borrarTareas={borrarTareas}
                    />
                ))}
            </ul>
        </div>
        </div>
    );
};
export default TodoList;