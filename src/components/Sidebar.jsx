import React from "react";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, ClickEvent }) => {
	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<ImCross onClick={ClickEvent} className="CrossBTn" />
			<ul className="list-unstyled">
				<li>
					<NavLink
						className="text-dark text-decoration-none"
						activeClassName="activeNav"
						to="/"
					>
						Product
					</NavLink>
				</li>
				<li>
					<NavLink
						className="text-dark text-decoration-none"
						activeClassName="activeNav"
						to="/signup"
					>
						How it works
					</NavLink>
				</li>
				<li>
					<NavLink
						className="text-dark text-decoration-none"
						activeClassName="activeNav"
						to="/signup"
					>
						Company
					</NavLink>
				</li>
				<li>
					<button className="themeBtn1 h5 py-2 px-3 me-2">Start Group</button>
					<button className="themeBtn2 h5 py-2 px-3">Download the app</button>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
