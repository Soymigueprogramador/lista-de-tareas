
import './TodoItem.css';  
const TodoItem = ({ tarea, borrarTareas }) => { 
    return (
        <div className='todo'>
            <li>
            <span>{tarea}</span>
            <button className="eliminar" onClick={() => borrarTareas(tarea)}>Eliminar tarea</button>
        </li>
        </div>
    );
};
export default TodoItem;