import React from "react";
import { v4 } from "uuid";

function List({ input, setInput, todos, setTodos }) {
  const onInputChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: v4(), title: input, completed: false }]);

    // if(input===""){
    //   alert("empty inp")
    // }else{
      
    // }
  };
  console.log(todos);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="add todo...."
          className="taskinp"
          value={input}
          onChange={onInputChange}
        ></input>
        <button type="submit" onClick={onSubmit}>
          Add
        </button>
      </form>{" "}
    </div>
  );
}

export default List;

// function TodoApp() {
//   const [todos, settodos] = useState([]);
//   const [initialTodo, setinitialTodo] = useState({
//     task: "",
//     completed: false,
//   });
//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           name="task"
//           value={initialTodo.task}
//           onChange={(e) => {
//             handleChange(e);
//           }}
//         />
//         <button
//           onClick={() => {
//             addTodo();
//           }}
//         >
//           {" "}
//           Add todo
//         </button>
//       </div>
//       <div>
//         {todos.length > 0
//           ? todos.map((todo, index) => {
//               return (
//                 <div key={index}>
//                   <span
//                     style={
//                       todo.completed
//                         ? {
//                             textDecoration: "line-through",
//                           }
//                         : {}
//                     }
//                   >
//                     {" "}
//                     {todo.task}{" "}
//                   </span>
//                   <button
//                     onClick={() => {
//                       completedTodo(index);
//                     }}
//                   >
//                     completed
//                   </button>

//                   <button
//                     onClick={() => {
//                       deleteTodo(index);
//                     }}
//                   >
//                     delete
//                   </button>
//                 </div>
//               );
//             })
//           : "no todos..."}
//       </div>
//     </div>
//   );
// }

// export default TodoApp;
