import { FaSearch, FaList, FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";
import clsx from 'clsx';
import ContentCard from "../component/contentcard";
import { useState } from "react";

const BusinessInfo= [
  {
    title:"ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅎ",
    desc:"ㅁㄴㅇㄹㅁㄴㄷㄹㅁㄴㅇㄹㄴㅇㅁㄹㅁㄴㄷㄹㅁㅁㄴㅇㄹㄴㅇ",
    update:"최근 수정일 : 0000.00.00",
  },
  {
    title:"asdfasdfasdfasdfasdfasd",
    desc:"asdfasdfasdfasdfasdfasdfa",
    update:"최근 수정일 : 0000.00.00",
  },
  {
    title:"DHKTGKTKGKTKHGKPFOGPKGKEGKP",
    desc:"GJKELFKEOFEKGFOPGKP",
    update:"최근 수정일 : 0000.00.00",
  },
  {
    title:"마늘오리마늘오리마늘오리마늘오리",
    desc:"오리마늘 오리마늘 오리마늘",
    update:"최근 수정일 : 0000.00.00",
  },
  {
    title:"AAAA",
    desc:"ABCD",
    update:"최근 수정일 : 0000.00.00",
  },
];

export default function HomePage () {

  {/* 그리드 뷰/리스트 뷰 상태값 */}
  const [isView, setIsView] = useState("grid");

  {/* 검색 시, 상태 값 */}
  const [searchQuery, setSearchQuery] = useState("");
  const filteredItems = BusinessInfo.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      {/* 검색창 + 그릴/리스트 버튼 */}
      <section>
      <div className="container mx-auto py-16 px-8 sm:px-0">
        {/* 검색창 */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="검색"
              className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="검색"
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          {/* 버튼 */}
          <div className="flex hidden md:block space-x-2">
            <button
              onClick={()=>setIsView("grid")}
              className={clsx(
                "p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                isView === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
              )}
              aria-label="Grid view"
            >
              <FaTh />
            </button>
            <button
              onClick={()=>setIsView("list")}
              className={clsx(
                "p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                isView === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
                )}
              aria-label="List view"
            >
              <FaList />
            </button>  
          </div>
        </div>
      </div>
      </section>
      {/* 콘텐츠 */}
      <section>
      <div className="container mx-auto px-8 sm:px-0">
        {BusinessInfo.length === 0 ? (
            <div className="flex justify-center text-xl text-gray-400">
              목록이 없습니다.
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="flex justify-center text-xl text-gray-400">
              검색 결과가 없습니다.
            </div>
          ) : (
            <div
              className={clsx({
                "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3": isView === "grid",
                "flex flex-col space-y-4" : isView ==="list"
                })}>
          {/* 세부 콘텐츠 */}
              {filteredItems.map((item, Idx) => (
                <ContentCard
                  key={Idx}
                  title={item.title}
                  date={item.update}
                />          
                )
              )}
            </div> 
          )
        }
      </div>
      </section>
    </div>
  )
}                                                         
