export default function Tag({ tagTitle }) {
  return (
    <button className="bg-gray-100 text-gray-600 text-xs font-bold break-words px-2.5 py-0.5 rounded-full cursor-pointer">
      {tagTitle}
    </button>
  );
}
