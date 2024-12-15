import { Tag } from "./index";

export default function ShowTodoNoteCard({
  title,
  content,
  timestamp,
  tag = ["none"],
  bgColor,
  isCompleted,
}) {
  return (
    <div
      className={`${bgColor} flex flex-col gap-6 max-w-sm p-6 border-gray-200 rounded-lg shadow text-wrap overflow-hidden`}
    >
      <div className="h-full flex flex-col gap-4">
        <h5 className="text-2xl text-gray-800 font-bold tracking-tight break-words">
          {title}
        </h5>
        <p className="text-gray-700 break-words">{content.slice(0, 150)}</p>
      </div>
      <div className="h-1/5 flex flex-col gap-4">
        <div className="flex gap-1 flex-wrap">
          {tag.map((t, index) => (
            <Tag key={index} tagTitle={t} />
          ))}
        </div>
        <p className="text-xs text-gray-600/75 self-end">{timestamp}</p>
      </div>
    </div>
  );
}
