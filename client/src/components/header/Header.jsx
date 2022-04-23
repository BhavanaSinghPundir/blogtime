import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImage" src="https://blog.hubspot.com/hs-fs/hub/53/file-23115630-jpg/blog/images/blogging_image.jpg" alt="" />
    </div>
  )
}
