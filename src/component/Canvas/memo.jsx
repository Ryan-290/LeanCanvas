import clsx from "clsx";
import { useState } from "react";
import { FaTimes, FaTrash, FaCheck } from "react-icons/fa";


export default function Memo({ handleDelete, content, handleUpdate }) {

  const [isColor, setIsColor] = useState("gray");
  const [isEditing, setIsEditing] = useState(false);
  const [editingContent, setEditingContent] = useState(content);

  const handleEditCancel = (e) => {
    e.stopPropagation()
    setIsEditing(false);
    setEditingContent(content);
  };

  const handleEditConfirm = (e) => {
    e.stopPropagation();
    setIsEditing(false);
    handleUpdate(editingContent);
  };

  const handleEditing = () => {
    setIsEditing(true);
  };

  return (
    <div
      className={clsx(
        "relative w-[230px] h-[180px] px-4 py-4",
        isColor === "gray" && "bg-gray-200",
        isColor === "pink" && "bg-pink-200",
        isColor === "yellow" && "bg-yellow-200",
        isColor === "blue" && "bg-blue-200"
      )}
      onClick={handleEditing}
    >
      {isEditing ? (
        <div>
          <textarea
            className="mt-4 h-fit focus:outline-none"
            value={editingContent}
            onChange={(e) => setEditingContent(e.target.value)}
          />
          <div className="absolute flex space-x-2 bottom-2 left-4 py-2">
            <button
              className="w-[16px] h-[16px] rounded-full bg-gray-300"
              onClick={() => setIsColor("gray")}
            />
            <button
              className="w-[16px] h-[16px] rounded-full bg-pink-300"
              onClick={() => setIsColor("pink")}
            />
            <button
              className="w-[16px] h-[16px] rounded-full bg-yellow-300"
              onClick={() => setIsColor("yellow")}
            />
            <button
              className="w-[16px] h-[16px] rounded-full bg-blue-300"
              onClick={() => setIsColor("blue")}
            />
          </div>
          <div className="absolute flex space-x-2 top-2 right-2 text-white">
            <button onClick={(e) => handleEditConfirm(e)}>
              <FaCheck />
            </button>
            <button onClick={(e) => handleEditCancel(e)}>
              <FaTimes />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            {content}
          </div>
          <button
            className="absolute top-2 right-2 text-white"
            onClick={handleDelete}
          >
            <FaTrash />
          </button>
        </div>
      )}
    </div>
  )
}