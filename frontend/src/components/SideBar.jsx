import React, { useEffect, useRef, useState } from 'react'
import "../CSS/SideBar.css"
import { analysisTypes } from '../constants/constants'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../App';

const SideBar = () => {
	const sidebarRef = useRef(null);
	const [toggle, setToggle] = useState(false);
	const { analysisType, setAnalysisType } = useContext(AppContext);

	useEffect(() => {
		if (sidebarRef.current) {
			const sidebar = sidebarRef.current;
			if (toggle) {
				sidebar.style.width = "0px";

			} else {
				sidebar.style.width = "20vw";
			}
		}

	}, [toggle]);

	return (
		<div ref={sidebarRef} className="sidebar-nav">
			<button
				className="toggle-btn"
				onClick={(e) => setToggle(prev => !prev)}
			>
				☰
			</button>
			{/* {toggle && <div ref={sidebarRef} className="sidebar-nav"> */}
			{<div>
				{/* <h1>Cloud Cost explorer</h1> */}
				<ul>
					{
						Object.keys(analysisTypes).map((type, i) => (
							<li
								key={i}
								className={`${analysisTypes[type] === analysisType ? "active" : ""}`}
								onClick={() => {
									setAnalysisType(analysisTypes[type]);
								}}
							>
								<Link to={analysisTypes[type]}>
									{analysisTypes[type]}
								</Link>
							</li>
						))
					}
				</ul>
			</div>
			}
		</div>
	)
}

export default SideBar