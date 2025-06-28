import { useState } from "react";
import ContentList from "../component/contentList";
import SearchBar from "../component/searchBar";
import ViewButton from "../component/viewButton";

export default function HomePage() {

  const [BusinessInfo, setBusineesInfo] = useState([
    {
      id: "1",
      title: "ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅎ",
      desc: "ㅁㄴㅇㄹㅁㄴㄷㄹㅁㄴㅇㄹㄴㅇㅁㄹㅁㄴㄷㄹㅁㅁㄴㅇㄹㄴㅇ",
      update: "최근 수정일 : 0000.00.00",
      catagory: "운동",
    },
    {
      id: "2",
      title: "asdfasdfasdfasdfasdfasd",
      desc: "asdfasdfasdfasdfasdfasdfa",
      update: "최근 수정일 : 0000.00.00",
      catagory: "헬스케어",
    },
    {
      id: "3",
      title: "DHKTGKTKGKTKHGKPFOGPKGKEGKP",
      desc: "GJKELFKEOFEKGFOPGKP",
      update: "최근 수정일 : 0000.00.00",
      catagory: "물류",
    },
    {
      id: "4",
      title: "마늘오리마늘오리마늘오리마늘오리",
      desc: "오리마늘 오리마늘 오리마늘",
      update: "최근 수정일 : 0000.00.00",
      catagory: "역량강화",
    },
    {
      id: "5",
      title: "AAAA",
      desc: "ABCD",
      update: "최근 수정일 : 0000.00.00",
      catagory: "카테고리쓰",
    },
  ]);

  {/* 그리드 뷰/리스트 뷰 상태값 */ }
  const [isView, setIsView] = useState("grid");

  {/* 검색 시, 상태 값 */ }
  const [searchQuery, setSearchQuery] = useState("");
  const filteredItems = BusinessInfo.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  {/* 삭제버튼 */ }
  const handleDelete = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    return (
      setBusineesInfo(prev =>prev.filter(target => (target.id !== id)))
    )
  }

  return (
    <div className="min-h-screen">
      {/* 검색창 + 그릴/리스트 버튼 */}
      <section>
        <div className="container mx-auto py-16 px-8 sm:px-0">
          {/* 검색창 */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            {/* 버튼 */}
            <ViewButton
              isView={isView}
              setIsView={setIsView}
            />
          </div>
        </div>
      </section>
      {/* 콘텐츠 */}
      <section>
        <div className="container mx-auto px-8 sm:px-0">
          <ContentList
            BusinessInfo={BusinessInfo}
            filteredItems={filteredItems}
            isView={isView}
            handleDelete={handleDelete}
          />
        </div>
      </section>
    </div>
  )
}                                                         
