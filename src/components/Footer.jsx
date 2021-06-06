import React from "react";
import { logo } from "../assets/images";
import facebook from "../assets/facebook.webp";
import playstore from "../assets/playstore.jpg";
import linkedin from "../assets/linkedin.webp";
import youtube from "../assets/youtube.webp";
import instagram from "../assets/instagram.webp";
import appstore from "../assets/appstore.webp";

const Footer = () => {
	return (
		<div className="footerContainer mt-5">
			<div className="innerFooter">
				<div className="container-fluid">
					<div className="row">
						<div className="col-3 py-5">
							<img src={logo} alt="logo" />
						</div>
						<div className="col-9 py-5">
							<div className="row">
								<div className="col-3">
									<h5 className="fw-bold">About</h5>
									<h6 className="fw-bold">Company</h6>
									<h6 className="fw-bold">Jobs</h6>
									<h6 className="fw-bold">Blog</h6>
								</div>
								<div className="col-3">
									<h5 className="fw-bold">Product</h5>
									<h6 className="fw-bold">How It works</h6>
									<h6 className="fw-bold">Group Management</h6>
									<ul className="list-unstyled mb-2">
										<li className="lightColor">・ Features</li>
										<li className="lightColor">・ Pricing</li>
									</ul>
									<h6 className="fw-bold">Blog</h6>
								</div>
								<div className="col-3">
									<h5 className="fw-bold">Explore</h5>
									<h6 className="fw-bold">Topics</h6>
									<h6 className="fw-bold">Group Management</h6>
									<h6 className="fw-bold">Browse Cities</h6>
								</div>
								<div className="col-3">
									<h5 className="fw-bold">Support</h5>
									<h6 className="fw-bold">Help Center</h6>
									<h6 className="fw-bold">Contact Us</h6>
								</div>
							</div>
						</div>
						<hr />
						<div className="d-flex justify-content-between mb-2">
							<small className="lightColor">
								@2020 ENDALGO, Inc. all rights reservrd ・ Privacy ・ Terms ・
								Sitemap
							</small>
							<div className="d-flex">
								<img src={facebook} alt="facebook" />
								<img src={linkedin} className="ms-4" alt="linkedin" />
								<img src={instagram} className="ms-4" alt="instagram" />
								<img src={youtube} className="ms-4" alt="youtube" />
								<div className="footerLine ms-4"></div>
								<img src={appstore} className="ms-4" alt="appstore" />
								<img src={playstore} className="ms-4" alt="playstore" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
