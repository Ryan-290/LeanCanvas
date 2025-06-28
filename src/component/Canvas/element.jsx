import { FaPlus } from "react-icons/fa";
import Memo from "./memo";
import { useState } from "react";

export default function CanvasElement( {children} ) {

  const [memos, setMemos] = useState([]);
  const [memoContent, setMemoContent] = useState();
  const [editingContent, setEditingContent] = useState(memoContent);

  const handleAddMemo = () => {
    const id = Math.random().toString(36).substring(2, 15);
    const newmemo = {
      id,
      content:"",
    }
    setMemos((prev)=>[...prev, newmemo]);
  }

  const handleUpdateMemo = (id, updateContent) => {
    setMemos(prev =>
      prev.map(memo =>
        memo.id === id ? {...memo, content:updateContent} : memo
      )
    )
  }

  const handleDeleteMemo = (e,id) => {
    e.stopPropagation()
    setMemos(prev => prev.filter(memo => memo.id !== id));
  }

  return (
    <div className="x-full ">
      <div className="flex justify-between items-center bg-gray-100 px-4 py-2">
        <div className="text-base font-bold">
          {children}
        </div>
        <div className="bg-blue-400 text-white p-1 rounded-md">
          <FaPlus 
            className="w-[100%] h-[100%]"
            onClick={handleAddMemo}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 my-4 min-h-[150px]">
        {memos.map(memo =>
          <Memo
            key={memo.id}
            content={memo.content}
            handleDelete={(e) => handleDeleteMemo(e,memo.id)}
            handleUpdate={(updateContent) =>handleUpdateMemo(memo.id, updateContent)}
          />
        )}
      </div>
    </div>
  )
}