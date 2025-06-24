import { Link } from "react-router-dom";
import ContentTag from "./contantTag";
import { FaTrash } from "react-icons/fa";

export default function ContentCard({ id, title, date, catagory, handleDelete }) {

  return (
    <Link
      className="relative p-6 space-x-4 rounded-md shadow-md transition-transform duration-300 hover:scale-105 "
      to={`canvas/${id}`}
    >
      {/* title */}
      <div className="mb-4 text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </div>
      {/* 최근 수정일 */}
      <div className="mb-4 text-sm text-gray-600">
        {date}
      </div>
      {/* 태그 + 삭제버튼 */}
      <div className="flex justify-between items-center space-x-2 overflow-hidden whitespace-nowrap">
        {/* 태그 */}
        <div>
          <ContentTag>{catagory}</ContentTag>
        </div>
      </div>
      {/* 삭제버튼 */}
      <button
        onClick={e => {
          handleDelete(e, id);
        }}
        className="absolute top-2 right-2 flex justify-center items-center p-[6px] rounded-full w-[24px] h-[24px] bg-red-400 cursor-pointer "
      >
        <FaTrash className="text-white" />
      </button>
    </Link>
  )
};