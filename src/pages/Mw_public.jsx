import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PublicEventBody from "../components/PublicEventBody";
import Sidebar from "../components/Sidebar";

const Mw_public = () => {
	const [isOpen, setIsOpen] = useState(false);

	const OnClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Header ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<PublicEventBody />
			<Footer />
		</>
	);
};

export default Mw_public;
