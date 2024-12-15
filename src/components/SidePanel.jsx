import { useTheme } from "../context";

export default function SidePanel({ handleOnClick }) {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <div className="flex flex-col items-center ull min-h-svh border-r-4 border-gray-200/50 gap-4 p-4">
      <div className="flex justify-between mb-4 gap-4">
        <input
          type="search"
          className=" border-solid border-gray-400 border-2 border-opacity-1 focus:outline-none px-2 py-1 rounded-lg"
          placeholder="search..."
        />
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-all duration-200 ease-in-out">
          + Note
        </button>
      </div>
      <div className="flex justify-between mb-4 gap-4">
        <p>side panel</p>
        <button onClick={handleOnClick}>click</button>
      </div>
      <div>
        <input
          type="checkbox"
          value=""
          onChange={onChangeBtn}
          checked={themeMode === "dark"}
        />
      </div>
    </div>
  );
}
