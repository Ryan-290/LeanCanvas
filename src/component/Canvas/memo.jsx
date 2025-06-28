import clsx from "clsx";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";


export default function Memo({ handleDelete }) {

  const [isColor, setIsColor] = useState("gray");

  return (
    <div 
      className={clsx(
        "relative w-[230px] h-[180px] px-4 py-4",
        isColor === "gray" && "bg-gray-200",
        isColor === "pink" && "bg-pink-200",
        isColor === "yellow" && "bg-yellow-200",
        isColor === "blue" && "bg-blue-200"
        )}>
      <textarea
        className="mt-2 h-fit focus:outline-none"
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
      <button
        className="absolute top-2 right-2 text-white"
        onClick={handleDelete}
      >
        <FaTimes />
      </button>
    </div>
  )
}