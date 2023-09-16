function TodoReducer(state, action){
    if(action.type == "edit_todo"){
        const todo = action.payload.todo;
        const todoText = action.payload.todoText;
        const updatedList = state.map(t => {
            if (t.id === todo.id) {
                todo.todoData = todoText;
            }
            return t;
        });
        return updatedList;
    }
    else if(action.type == 'delete_todo'){
        const todo = action.payload.todo;
        const updatedList = state.filter(t => t.id !== todo.id)
        return updatedList;
    }
    else if(action.type == 'add_todo'){
        const data = action.payload.data;
        return [...state,{id:state.length+1,todoData:data,finished:false}]
    }
    else if(action.type == 'change_finished'){
        const todo = action.payload.todo;
        const isFinished = action.payload.isFinished;
        // console.log(isFinished);
        const updatedList = state.map((t) => {
            if (t.id === todo.id) {
                todo.finished = isFinished;
                // console.log(t.id);
                // console.log(todo.id);
                // console.log(isFinished);
            }//else{
            //     console.log("nhi mili",t.id);
            // }
            return t;
        });
        return updatedList;
    }
    return state;
}

export default TodoReducer;