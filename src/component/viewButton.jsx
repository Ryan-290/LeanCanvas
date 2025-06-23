import clsx from 'clsx';
import { FaList, FaTh } from "react-icons/fa";

export default function ViewButton({ isView, setIsView }) {

  return (
    <div className="flex hidden md:block space-x-2">
      <button
        onClick={() => setIsView("grid")}
        className={clsx(
          "p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
          isView === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
        )}
        aria-label="Grid view"
      >
        <FaTh />
      </button>
      <button
        onClick={() => setIsView("list")}
        className={clsx(
          "p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
          isView === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
        )}
        aria-label="List view"
      >
        <FaList />
      </button>
    </div>

  )
}