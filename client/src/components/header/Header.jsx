import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImage" src="https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149009911.jpg?w=740&t=st=1650709592~exp=1650710192~hmac=00915449b369becb9c1ba1a4624849138d83a6f88b0fb407c9e848591567c637" alt="" />
    </div>
  )
}
