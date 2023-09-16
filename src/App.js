import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { useReducer } from "react";
import TodoContext from "./components/Context/TodoContext";
import TodoDispatch from "./components/Context/TodoDispatch";
import TodoReducer from "./components/reducers/TodoReducer";
function App() {
  //   const [list,setList] = useState([
  //     {id:1, todoData:'todo 1', finished:false},
  //     {id:2, todoData:'todo 2', finished:false},
  // ]);
  const [list, dispatch] = useReducer(TodoReducer, []);
  console.log(typeof(list));
  console.log(list);
  console.log(typeof(dispatch))
  return (
    //<div>
    <TodoContext.Provider value={{ list }}>
      <TodoDispatch.Provider value={{ dispatch }}>
        <AddTodo /*updateList={(todo)=> setList([...list,{id:list.length+1,todoData:todo,finished:false}])}*/
        />
        <TodoList /*list = {list} updateList={setList}*/
        />
      </TodoDispatch.Provider>
    </TodoContext.Provider>
    //</div>
  );
}

export default App;
