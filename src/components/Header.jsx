import React from "react";
import { logo } from "../assets/images";
import { RiArrowDownSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="headerContainer position-relative">
			<div className="innerHeaderContainer">
				<div className="container-fluid">
					<div className="d-flex justify-content-between align-items-center">
						<div>
							<img src={logo} alt="logo" />
						</div>
						<div className="navLinks position-absolute">
							<ul className="list-unstyled d-flex">
								<li className="fw-bold me-5">
									<NavLink
										to="/"
										className="d-flex align-items-center text-dark text-decoration-none"
									>
										Product{" "}
										<RiArrowDownSLine fontSize="1.4rem" className="ms-2" />
									</NavLink>
								</li>
								<li className="fw-bold me-5">
									<NavLink to="/" className="text-dark text-decoration-none">
										How it works
									</NavLink>
								</li>
								<li className="fw-bold ">
									<NavLink to="/" className="text-dark text-decoration-none">
										Company
									</NavLink>
								</li>
							</ul>
						</div>
						<div className="btnContainer">
							<button className="themeBtn1 py-1 px-3 me-2">Start Group</button>
							<button className="themeBtn2 py-1 px-3">Download the app</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
