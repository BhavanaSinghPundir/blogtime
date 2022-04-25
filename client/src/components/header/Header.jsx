import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleLg">Blog</span>
            <span className="headerTitleSm">Express yourself with words</span>
        </div>
        <img className="headerImage" src="https://images.pexels.com/photos/8264/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}
