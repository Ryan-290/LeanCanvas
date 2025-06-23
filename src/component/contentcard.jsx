import { Link } from "react-router-dom";
import ContentTag from "./contantTag";

export default function ContentCard ( { title, date } ) {

  return (
    <Link className="flex flex-col p-6 space-x-4 rounded-md shadow-md transition-transform duration-300 hover:scale-105 ">
      {/* title */}
      <div className="my-4 text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </div>
      {/* 최근 수정일 */}
      <div className="mb-4 text-sm text-gray-600">
        {date}
      </div>
      {/* 태그 */}
      <div className="flex items-center space-x-2 overflow-hidden whitespace-nowrap">
        <ContentTag>운동</ContentTag>
        <ContentTag>역량강화</ContentTag>
        <ContentTag>생활</ContentTag>
      </div>
     </Link>
  )
};