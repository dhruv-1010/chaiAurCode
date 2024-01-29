import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
    // {},{},{},... and more todos will be added
  ],
  addTodo: (todo) => {}, // add a new todo
  updateTodo: (id, todo) => {}, // update my todo
  deleteTodo: (id) => {}, // delete the tudo
  toggleComplete: (id) => {}, //which turns completed todo green
});
// useContext always require a seperate Context
// we also need some default values

export const useTodo = () => {
  return useContext(TodoContext);
};
// a provider is required to wrap all the children thats why we export it seperately
export const Todoprovider = TodoContext.Provider;
