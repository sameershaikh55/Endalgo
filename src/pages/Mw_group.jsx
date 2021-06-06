import React, { useState } from "react";
import Footer from "../components/Footer";
import GroupBody from "../components/GroupBody";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Mw_group = () => {
	const [isOpen, setIsOpen] = useState(false);

	const OnClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Header ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<GroupBody />
			<Footer />
		</>
	);
};

export default Mw_group;
