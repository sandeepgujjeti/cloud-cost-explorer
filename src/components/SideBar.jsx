import React, { useEffect, useRef, useState } from 'react'
import "./SideBar.css"

const SideBar = () => {
  const sidebarRef = useRef(null);
  const [toggle, setToggle] = useState(false)
  console.log(toggle);
  useEffect(() => {
    if (sidebarRef.current) {
      const sidebar = sidebarRef.current;
      if (toggle) {
        sidebar.style.width = "0px"

      } else {
        sidebar.style.width = "250px"
      }
    }
  }, [toggle])

  return (
    <div>
      <button
        className="toggle-btn"
        onClick={(e) => setToggle(prev => !prev)}
      >
        ☰
      </button>
     {/* {toggle && <div ref={sidebarRef} className="sidebar-nav"> */}
     {<div ref={sidebarRef} className="sidebar-nav">

        <h1>Cloud Cost explorer</h1>
        <ul>

          <li>Team Wise Analysis</li>
          <li>Date Wise Analysis</li>
          <li>Service Wise Analysis</li>
        </ul>
      </div>
}

    </div>
  )
}

export default SideBar