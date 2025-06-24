import ContentCard from "../component/contentcard";
import clsx from 'clsx';

export default function ContentList({ BusinessInfo, filteredItems, isView,handleDelete }) {

  if (BusinessInfo.length === 0) {
    return (
      <div className="flex justify-center text-xl text-gray-400">
        목록이 없습니다.
      </div>
    )
  }
  if (filteredItems.length === 0) {
    return (
      <div className="flex justify-center text-xl text-gray-400">
        검색 결과가 없습니다.
      </div>
    )
  }
  return (
    <div
      className={clsx({
        "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3": isView === "grid",
        "flex flex-col space-y-4": isView === "list"
      })}>
      {/* 세부 콘텐츠 */}
      {filteredItems.map(item => (
        <ContentCard
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.update}
          catagory={item.catagory}
          handleDelete={handleDelete}
        />
      )
      )}
    </div>
  )

}