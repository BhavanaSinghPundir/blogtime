import "./singlepage.css"
import Sidebar from "../../sidebar/Sidebar"
import SinglePost from "../../singlePost/SinglePost"
export default function Singlepage() {
  return (
    <div className="singlePage">
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}
