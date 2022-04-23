import "./topbar.css"
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://bloggtime.herokuapp.com/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); 
  };
  // const {user} = useContext(Context);
  return (
    <div className='top'>
        <div className="topleft">
          <i className="topIcon fa-brands fa-facebook"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topcenter">
          <ul className="toplist">
          <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
          <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
          <li className="topListItem"> <Link className="link" to="/write">WRITE</Link></li>
            
         <li className="topListItem" onClick={handleLogout}>
         {user && "LOGOUT"}
         </li>
          </ul>
        </div> 
        <div className="topright">
        {user ? (
          <Link className="link" to="/settings">
          <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="toplist">
            <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
