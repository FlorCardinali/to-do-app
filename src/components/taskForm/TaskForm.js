import React,{useState} from "react"
import style from "../taskForm/TaskForm.module.css"

const TaskForm = (props) => {

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
  
    const handleTituloChange = (event) => {
      setTitulo(event.target.value);
    };
  
    const handleDescripcionChange = (event) => {
      if (event.target.value.length <= 200) {
        setDescripcion(event.target.value);
      } 
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert("aaaa");
    };



    return (
    <>
        <h2>New Task</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Título:
                <input 
                    placeholder="Nombre de la tarea..."
                    type="text" 
                    value={titulo} 
                    onChange={handleTituloChange} 
                />
            </label>

            <label>
                Descripción:
                <textarea 
                    placeholder="Maximo 100 caracteres.."
                    maxLength={100} 
                    rows={5}
                    value={descripcion} 
                    onChange={handleDescripcionChange} 
                />
            </label>
            <button type="submit">Create New Task</button>
        </form>
    </>
    );
}

export default TaskForm;