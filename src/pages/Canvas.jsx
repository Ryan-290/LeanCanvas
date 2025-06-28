import { useParams } from "react-router-dom"
import CanvasElement from "../component/Canvas/element";
import CanvasTitle from "../component/Canvas/canvas_title";

export default function CanvasPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto py-10 px-8 sm:px-0 min-h-screen ">
      {/* 타이틀 */}
      <CanvasTitle />
      {/* 캔버스 */}
      <div className="w-full h-fit border-[4px] rounded-lg border-gray-800  divide-y divide-gray-300">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x  divide-gray-300">
          <CanvasElement> 문제 </CanvasElement>
          <CanvasElement> 해결방안 </CanvasElement>
          <CanvasElement> 가치제안 </CanvasElement>
          <CanvasElement> 경쟁우위 </CanvasElement>
          <CanvasElement> 목표고객 </CanvasElement>
          <CanvasElement> 기존대안 </CanvasElement>
          <CanvasElement> 핵심지표 </CanvasElement>
          <CanvasElement> 상위개념 </CanvasElement>
          <CanvasElement> 고객경로 </CanvasElement>
          <CanvasElement> 얼리 어답터 </CanvasElement>
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-300">
          <CanvasElement> 비율구조  </CanvasElement>
          <CanvasElement> 수익흐름 </CanvasElement>
        </div>
      </div>
    </div>
  )
}