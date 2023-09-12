// TodoList.js
import Todo from "../Todo/Todo";
function TodoList({list, updateList}){
    return(
        <div>
            {list.map(todo=> <Todo 
                                    key={todo.id} 
                                    todoData={todo.todoData} 
                                    isFinished={todo.finished}>
                                    changeFinished={(isFinished)=>{
                                    }}    
                                    </Todo>)}
        </div>
    )
}

export default TodoList;

