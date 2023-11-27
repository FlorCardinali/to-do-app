import React,{useState} from "react"

const TaskItem = (props) => {
    const [state, setState] = new useState(false);

    return (
    <div className={state ? "notDo" : "do"}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
    );
}
export default TaskItem;