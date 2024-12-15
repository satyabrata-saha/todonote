import { useState } from "react";
import { useTodoNote } from "../context";

export default function AddTodoNoteForm({ fromhidden, handleOnClick }) {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
    tag: ["test"],
    completed: false,
  });
  const { addTodoNote } = useTodoNote();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    console.log(todo);

    addTodoNote(todo);
    setTodo({ title: "", content: "", tag: ["test"], completed: false });
  };
  return (
    <div
      hidden={fromhidden}
      className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600/50 w-screen h-screen backdrop-blur-sm z-10"
    >
      <div className="flex justify-center items-center h-full">
        <form onSubmit={handleSubmit} className="flex flex-col w-1/3 gap-2">
          <input
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            type="text"
            placeholder="Title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5"
          />
          <textarea
            value={todo.content}
            onChange={(e) => setTodo({ ...todo, content: e.target.value })}
            placeholder="Add a new todo..."
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm resize-none focus:outline-none rounded-lg  block w-full p-2.5"
            rows={"10"}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 ease-in-out"
          >
            Add Todo
          </button>
        </form>
      </div>

      {/* outside click to make form false */}
      <div
        onClick={handleOnClick}
        className="w-1/3 h-screen absolute top-0 z-0"
      />
      <div
        onClick={handleOnClick}
        className="w-1/3 h-screen absolute top-0 left-2/3 z-0"
      />
      <div
        onClick={handleOnClick}
        className="w-screen h-1/5 absolute top-0 z-0"
      />
      <div
        onClick={handleOnClick}
        className="w-screen h-1/5 absolute bottom-0 z-0"
      />
    </div>
  );
}
