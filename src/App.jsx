import { ThemeProvider, TodoNoteProvider, useTodoNote } from "./context";
import {
  AddTodoNoteEnd,
  AddTodoNoteForm,
  ShowTodoNoteCard,
  SidePanel,
} from "./components";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [todos, setTodos] = useState([]);
  const [holdTodos, setHoldTodos] = useState([]);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [toggleFrom, setToggleFrom] = useState(true);

  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("theme", "dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("theme", "light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  const addTodoNote = (todo) => {
    function d() {
      const date = new Date();
      const curdate = date.toDateString().slice(4);
      return curdate;
    }

    setTodos((prevTodos) => [
      {
        id: Date.now(),
        timestamp: d(),
        ...todo,
      },
      ...prevTodos,
    ]);
    setToggleFrom(true);
  };

  const updateTodoNote = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((t) => (t.id === id ? todo : t)));
  };

  const deleteTodoNote = (id) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setThemeMode(theme);
    }
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, holdTodos]);

  const handleToggleFrom = () => {
    setToggleFrom(!toggleFrom);
  };

  const searchFromNotes = (e) => {
    const search = e.target.value;
    console.log(todos);

    if (todos.length > 0) {
      if (search.length > 0) {
        const filteredTodos = todos.filter((todo) => {
          return todo.title.toLowerCase().includes(search.toLowerCase());
        });
        console.log(filteredTodos);

        setHoldTodos(filteredTodos);
      } else if (search.length === 0) {
        setHoldTodos([]);
      }
    }
  };
  const handleOnClickOnSidePane = () => {
    setShowSidePanel(!showSidePanel);
  };

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <TodoNoteProvider
        value={{ addTodoNote, deleteTodoNote, updateTodoNote, toggleComplete }}
      >
        <div className="flex dark:bg-gray-800 dark:text-gray-100">
          <div
            className="w-1/4 h-full transition-all ease-in-out duration-500 fixed"
            hidden={showSidePanel}
          >
            <SidePanel handleOnClick={handleOnClickOnSidePane} />
          </div>
          <div className="ms-[25%] w-3/4 px-4 min-h-lvh">
            <AddTodoNoteForm
              fromhidden={toggleFrom}
              handleOnClick={handleToggleFrom}
            />
            <div className="flex justify-between w-3/4 py-4 px-4 fixed dark:bg-gray-800 dark:text-gray-100">
              <button
                onClick={handleOnClickOnSidePane}
                className="border-2 border-solid border-blue-500 py-2 px-4 rounded-lg"
              >
                Side Panel
              </button>
              <input
                onChange={searchFromNotes}
                type="search"
                className="w-1/4 border-solid border-gray-400 border-2 border-opacity-1 focus:outline-none px-4 py-2 rounded-lg text-black"
                placeholder="search..."
              />
              <button
                onClick={handleToggleFrom}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-all duration-200 ease-in-out"
              >
                Add Note
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mb-4 mt-24 mw-1/4">
              {holdTodos.length > 0
                ? holdTodos.map((todo) => (
                    <ShowTodoNoteCard
                      key={todo.id}
                      title={todo.title}
                      content={todo.content}
                      timestamp={todo.timestamp}
                      tag={todo.tag}
                      bgColor="bg-green-400"
                      isCompleted
                    />
                  ))
                : todos.length > 0 &&
                  todos.map((todo) => (
                    <ShowTodoNoteCard
                      key={todo.id}
                      title={todo.title}
                      content={todo.content}
                      timestamp={todo.timestamp}
                      tag={todo.tag}
                      bgColor="bg-green-400"
                      isCompleted
                    />
                  ))}
              <AddTodoNoteEnd handleOnClick={handleToggleFrom} />
            </div>
          </div>
        </div>
      </TodoNoteProvider>
    </ThemeProvider>
  );
}

export default App;
