import { useParams } from "react-router-dom"

export default function CanvasPage () {
  const {id} = useParams();
  return (
    <div>
      이 페이지의 id 는 {id}
    </div>
  )
}