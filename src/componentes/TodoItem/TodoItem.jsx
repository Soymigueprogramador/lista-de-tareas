
import './TodoItem.css';  
const TodoItem = ({ tarea, borrarTareas }) => { 
    return (
        <li>
            <span>{tarea}</span>
            <button className="eliminar" onClick={() => borrarTareas(tarea)}>Eliminar tarea</button>
        </li>
    );
};
export default TodoItem;