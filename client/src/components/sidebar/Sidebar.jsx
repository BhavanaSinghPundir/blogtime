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
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454_960_720.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et totam eaque veritatis voluptatibus, dolore iure cum. Similique minus a odit quisquam nesciunt, ratione totam tempore harum sit amet debitis.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map(c=>(
                    <Link to={`/?cat=${c.name}`} className="link">
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
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
