export default function AddTodoNoteEnd({ handleOnClick }) {
  return (
    <div
      onClick={handleOnClick}
      className="flex justify-center items-center border-dotted border-2 border-gray-600/50 w-full h-full rounded-lg shadow cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
        className="text-gray-600/50 size-16"
      >
        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
      </svg>
    </div>
  );
}
