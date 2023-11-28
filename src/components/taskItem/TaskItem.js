import React,{useState} from "react"
import style from "../taskItem/TaskItem.module.css"

const TaskItem = (props) => {
    const [state, setState] = useState(false);
    const [visible, setVisible] = useState(true);
    function handleClick(){
        setState(!state);
    }
    function deleteTask(){
        setVisible(false);

        alert("Eliminado con exito!")
    }

    return (
    <div style={{display: visible? "flex" : "none"}} className={state ? style.do : style.notDo}>
        <section className={style.taskText}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </section>
       <span>
        <button 
        className={state ? style.normalButton : style.checkButton} 
        onClick={() => handleClick()}>
            {state ? "Uncheck" : "Check"}
        </button>
        <button className={style.deleteButton} onClick={() => deleteTask()}>Delete</button>
       </span>
    </div>
    );
}



export default TaskItem;