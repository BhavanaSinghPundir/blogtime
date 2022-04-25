import { useEffect, useState } from "react"
import "./sidebar.css"
// import axios from "axios";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";

export default function Sidebar() {
    const [cats,setCats]=useState([]);

    useEffect(()=>{
        const getCats=async ()=>{
            const res=await axiosInstance.get("/categories")
            setCats(res.data);
        };
        getCats();
    },[])

  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Us</span>
            <img src="https://miro.medium.com/max/1100/1*dqvlaszRLvoPmARpOlLN9A.png" alt="" />
            <p>This is our MERN project  <br /> made by <br /> <br /> Sayli Mandavkar <br />Satwika Pantagani <br /> Bhavana Pundir</p>
        </div>
        {/* <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map(c=>(
                    <Link to={`/?cat=${c.name}`} className="link">
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div> */}
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}
