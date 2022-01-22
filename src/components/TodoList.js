import React from "react";
const TodoList = ({ todos, setTodos, input }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((item) => item.id !== id));

    // console.log(todos);
    // const todosCopy = [...todos];
    // todosCopy.splice(index, 1);
    // setTodos(todosCopy);
  };

  const handleComplete = (index) => {
    //   console.log(todos);
    const todosCopy = [...todos];
    todosCopy[index].completed = true;
    setTodos(todosCopy);
  };
  // if(input===""){alert("empty to do")}else
  return (
    <div id="list">
      {/* {const {id,title,completed}= todo} */}
      {todos.map((item, index) => (
        <li key={item.id} index={index}>
          {console.log(item.completed)}
          <div id="sp">
            <span
              className={item.completed ? "completed" : null}
              type="text"
              value={item.title}
              // className="list"
              onChange={(e) => {
                e.preventDefault();
              }}
            >
              {" "}
              {item.title}
            </span>
          </div>
          <div id="btn">
            <button
              id="completebtn"
              onClick={() => {
                handleComplete(index);
              }}
            >
              c
            </button>
            <button
              id="deletebtn"
              onClick={() => {
                handleDelete(item);
              }}
            >
              d
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
