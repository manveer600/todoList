// TodoList.js
import Todo from "../Todo/Todo";
import TodoContext from "../Context/TodoContext";
import TodoDispatch from "../Context/TodoDispatch";
import { useContext } from "react";
function TodoList(/*{list,updateList}*/) {
    const { list } = useContext(TodoContext);
    const {dispatch} = useContext(TodoDispatch);
    function edit(todo, todoText) {
        // const updatedList = list.map(t => {
        //     if (t.id === todo.id) {
        //         todo.todoData = todoText;
        //     }
        //     return t;
        // });
        // setList(updatedList);
        dispatch({type:'edit_todo', payload:{todo:todo,todoText:todoText}});
    }
    function Delete(todo) {
        // const updatedList = list.filter(t => t.id !== todo.id)
        // setList(updatedList);
        dispatch({type:'delete_todo', payload:{todo:todo}});
    }

    function changeFinished(todo, isFinished) {
        // // console.log(isFinished);
        // const updatedList = list.map((t) => {
        //     if (t.id === todo.id) {
        //         todo.finished = isFinished;
        //         // console.log(t.id);
        //         // console.log(todo.id);
        //         // console.log(isFinished);
        //     }//else{
        //     //     console.log("nhi mili",t.id);
        //     // }
        //     return t;
        // });
        // setList(updatedList);
        dispatch({type:'change_finished', payload:{todo:todo,isFinished:isFinished}});

    }
    return (
        <div>
            {list.map((todo) =>
                <Todo key={todo.id}
                    todoData={todo.todoData}
                    isFinished={todo.finished}
                    changeFinished={(isFinished) => changeFinished(todo,isFinished)}
                    onDelete={() => Delete(todo)}
                    onEdit={(todoText) => edit(todo,todoText)}
                />


            )}
        </div>
    )
}

export default TodoList;

