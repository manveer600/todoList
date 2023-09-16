import TodoDispatch from "../Context/TodoDispatch";
import { useContext, useState } from "react";
function AddTodo(/*{ updateList }*/) {
    const {dispatch} = useContext(TodoDispatch);
    const [inputText, setInputText] = useState("");
    return (
        <div>
            <input type="text" value={inputText} placeholder="Add your next todo.." onChange={(e) =>
                setInputText(e.target.value)
            } />
            <button onClick={() => { inputText !== "" && dispatch({type:"add_todo", payload:{data:inputText}}); setInputText(''); }}>Add</button>
        </div>
    )
}
export default AddTodo;


