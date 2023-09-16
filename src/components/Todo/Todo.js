// Todo.js
import { useState } from "react";
function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
    const [finished, setFinished] = useState(isFinished);
    const [editing, setEditing] = useState(false);
    const [data, setData] = useState(todoData);
    return (
        <div>
            <input type="checkbox" checked={finished} onChange={(e) => {
                setFinished(e.target.checked);
                changeFinished(e.target.checked);
            }} />
            {
                (editing) ? <input type="text" value={data} onChange={(e) => setData(e.target.value)} /> : <span>{todoData}</span>
            }
            <button onClick={() =>{
                setEditing(!editing);
                onEdit(data);
            }}>{(!editing) ? 'Edit' : "Save"}</button>
            <button onClick={onDelete}>Delete</button>
        </div>

    )
}

export default Todo;
