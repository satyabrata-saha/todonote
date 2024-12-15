import { createContext, useContext } from "react";

export const TodoNoteContext = createContext({
  todos: [
    {
      id: 1,
      todoNoteTitle: "Todo msg",
      todoNoteContent: "Todo content",
      isCompleted: false,
      timestamp: new Date().toString(),
      tag: ["tag1", "tag2"],
      bgColor: "red",
    },
  ],
  addTodoNote: (todo) => {},
  updateTodoNote: (id, todo) => {},
  deleteTodoNote: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodoNote = () => {
  return useContext(TodoNoteContext);
};

export const TodoNoteProvider = TodoNoteContext.Provider;
