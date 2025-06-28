import { useState } from 'react';
import { FaCheck, FaEdit, FaTimes } from 'react-icons/fa';

export default function CanvasTitle() {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("타이틀");
  const [editingTitle, setEditingTitle] = useState(title);


  const handleEditing = () => {
    setIsEditing(true);
  }

  const handleEditCancel = () => {
    setIsEditing(false);
  }

  const handleEditConfirm = () => {
    setTitle(editingTitle);
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <div className="flex w-full space-x-4 justify-center items-center py-10">
          <input
            className="text-3xl text-center px-2 font-bold focus:border-b-2 focus:border-blue-400  focus:outline-none"
            value={editingTitle}
            onChange={(e) => setEditingTitle(e.target.value)}
          />
          {/* 수정 완료 버튼 */}
          <div className="h-[36px] w-[36px]">
            <button
              className="flex justify-center items-center bg-green-400 rounded-full aspect-[1] p-2 w-full h-full"
              onClick={handleEditConfirm}
            >
              <FaCheck className="text-white w-[100%] h-[100%]" />
            </button>
          {/* 수정 취소 버튼 */}
          </div>
          <div className="h-[36px] w-[36px]">
            <button
              className="flex justify-center items-center bg-gray-400 rounded-full aspect-[1] p-2 w-full h-full"
              onClick={handleEditCancel}
            >
              <FaTimes className="text-white w-[100%] h-[100%]" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-full space-x-4 justify-center items-center py-10">
          <div className="text-3xl font-bold">
            {title}
          </div>
          <div className="h-[36px] w-[36px]">
            <button
              className="flex justify-center items-center bg-yellow-400 rounded-full aspect-[1] p-2 w-full h-full"
              onClick={handleEditing}
            >
              <FaEdit className="text-white w-[100%] h-[100%]" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}