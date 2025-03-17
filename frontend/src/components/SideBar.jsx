import React, { useRef, useState } from 'react'
import "../CSS/SideBar.css"
import { analysisTypes } from '../constants/constants'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../App';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPeopleGroup, faTags } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
	const sidebarRef = useRef(null);
	const [toggle, setToggle] = useState(false);
	const { analysisType, setAnalysisType } = useContext(AppContext);

	const icons = [faGlobe, faPeopleGroup, faTags];

	return (
		<div ref={sidebarRef} style={{ width: toggle ? "0" : "100%" }} className="sidebar-nav">
			<button
				className="toggle-btn"
				onClick={(e) => setToggle(prev => !prev)}
			>
				☰
			</button>
			{<div>
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
								<Link className='analysis-link' id={analysisType} to={analysisTypes[type]}>
									<i><FontAwesomeIcon icon={icons[i]} /></i>
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