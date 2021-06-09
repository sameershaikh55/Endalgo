import React from "react";

// IMPORTING IMAGES
import publicBody from "../assets/publicBody.png";
import personPlaceholder from "../assets/personPlaceholder.png";
import soccer from "../assets/soccer.png";
import time from "../assets/time.webp";
import map from "../assets/map.webp";
import fee from "../assets/fee.webp";
import mapImage from "../assets/mapImage.png";
import uProfile from "../assets/uProfile.png";

// IMPORTING ICONS
import { FaStar } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";

const PublicEventBody = () => {
	const details = [
		{
			col1: "Age",
			col2: "All ages",
		},
		{
			col1: "Gender",
			col2: "Co-ed",
		},
		{
			col1: "Skill Level",
			col2: "Competitive",
		},
		{
			col1: "Guest",
			col2: "Up to 5 guests",
		},
	];
	return (
		<div className="publicEventBody_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8 mx-auto mt-4 px-0 px-md-3">
						{/* BANNER START */}
						<div>
							<img width="100%" src={publicBody} alt="" />
						</div>
						{/* BANNER END */}
					</div>
				</div>
				<div className="row">
					<div className="col-md-8 mx-auto mt-0 mt-md-4">
						{/* RATING START */}
						<div className="mt-3 d-flex align-items-center">
							<FaStar fontSize="1.2rem" color="#ffd317" className="me-2" />
							<div className="lightColor">4.5 (21)</div>
						</div>
						{/* RATING END */}

						{/* HOSTED START */}
						<h2 className="mt-2 fw-bold">
							los angeles endalgo public pickup soccer event - let together
						</h2>
						<div className="hosted d-flex my-4">
							<img
								className="rounded-circle"
								src={personPlaceholder}
								alt="personPlaceholder"
							/>
							<div className="ms-1">
								<small className="lightColor">Hosted by</small>
								<h6 className="mb-0">Thomas Kukabango</h6>
							</div>
						</div>
						{/* HOSTED END */}

						<hr />

						{/* GROUP START */}
						<div className="group pt-1 pb-2">
							<h4 className="fw-bold">Group</h4>
							<div className="d-flex align-items-center mt-3">
								<img src={publicBody} alt="" />
								<h6 className="ms-3 fw-bold me-3">
									LA RED SHIELD PICK GAMES ! 5v5 / 6v6 / <br /> 7v7
								</h6>
								<RiArrowRightSLine fontSize="1.5rem" />
							</div>
						</div>

						<hr />

						{/* DETAIL START */}
						<div>
							<div className="d-flex align-items-center">
								<img src={soccer} alt="soccer" />
								<h6 className="mb-0 ms-2">Sport Type</h6>
							</div>
							<div className="d-flex align-items-start mt-3">
								<img src={time} alt="time" />
								<div className="mb-0 ms-2">
									<h6>Thu, 2 Jan 3:30 PM - 6:30 PM</h6>
									<h6 className="text-danger">Register by 10:00 AM on 5/3</h6>
								</div>
							</div>
							<div className="d-flex align-items-start mt-3">
								<img src={map} alt="map" />
								<div className="mb-0 ms-2">
									<h6>Del Rey Lagoon Park</h6>
									<h6>1350 S Sepulveda Blvd, Los Angeles, CA 90025</h6>
									<small className="lightColor">
										Right in front of the parking area. the baseball field is
										out thre.
									</small>
								</div>
							</div>
							<div className="d-flex align-items-center mt-3">
								<img src={fee} alt="fee" />
								<h6 className="mb-0 ms-2">&#36;8.00 Card or &#36;10.00 Cash</h6>
							</div>
						</div>
						{/* DETAIL END */}

						<hr />

						{/* DETAILS START */}
						<div className="description py-2">
							<h4 className="fw-bold">Description</h4>
							<h5 className="mb-4">
								Anyone in this group is welcome to play. Your skill level or age
								is not a problem.This is RECREATIONAL SOCCER, just to have fun.
								<br />
								This is a coed game. Excessive yelling or aggressive play is not
								tolerated in our games.
							</h5>
							<h5 className="mb-4">
								We will play on field #1 from 8:00 to 9:00pm. <br /> Please show
								up by no later than 7:45pm to warm up properly to avoid any
								injuries and to start the game on time, so we can play the
								entire hour.
							</h5>
							<h5>
								You can wear turf soccer shoes or soccer cleats on this field.
								<br />
								You can wear any jersey color, We'll bring soccer bibs. <br />
								PASS THE BALL, MOVE AND HAVE FUN!
							</h5>
						</div>
						{/* DETAILS END */}

						<hr />

						{/* PARTICIPANT START */}
						<div className="participants py-2">
							<h4 className="fw-bold">Participants</h4>
							<div className="d-flex align-items-md-center flex-column flex-md-row">
								<div>
									<img
										className="rounded-circle"
										src={personPlaceholder}
										alt="personPlaceholder"
									/>
									<img
										className="rounded-circle ms-1"
										src={personPlaceholder}
										alt="personPlaceholder"
									/>
									<img
										className="rounded-circle ms-1"
										src={personPlaceholder}
										alt="personPlaceholder"
									/>
									<img
										className="rounded-circle ms-1"
										src={personPlaceholder}
										alt="personPlaceholder"
									/>
								</div>
								<h6 className="greenColor ms-2 mb-0 mt-2 mt-md-0">
									24 people are going.
								</h6>
							</div>
						</div>
						{/* PARTICIPANT END */}

						<hr />

						{/* PARTICIPANT START */}
						<div className="details py-2">
							<h4 className="fw-bold mb-3">Details</h4>
							{details.map((prev, i) => {
								const { col1, col2 } = prev;
								return (
									<div key={i} className="row">
										<div className="col-12 col-md-4 lightColor">{col1}</div>
										<div className="col-12 col-md-8 fw-bold">{col2}</div>
										<br />
										<br />
									</div>
								);
							})}
						</div>
						{/* PARTICIPANT END */}

						<hr />

						{/* MAP START */}
						<div className="details py-2">
							<h4 className="fw-bold mb-3">Map</h4>
							<img width="100%" src={mapImage} alt="mapImage" />
						</div>
						{/* MAP END */}

						<hr />

						<div className="review py-2">
							<h4 className="fw-bold mb-4">Review</h4>
							{[1, 1, 1].map((prev, i) => {
								return (
									<div key={i}>
										<div className="d-flex align-items-center">
											<img src={uProfile} alt="uProfile" />
											<h5 className="ms-2 mb-0 fw-bold">A*******</h5>
										</div>
										<div className="d-flex my-2">
											<FaStar
												fontSize="1.2rem"
												color="#ffd317"
												className="me-2"
											/>
											<FaStar
												fontSize="1.2rem"
												color="#ffd317"
												className="me-2"
											/>
											<FaStar
												fontSize="1.2rem"
												color="#ffd317"
												className="me-2"
											/>
											<FaStar
												fontSize="1.2rem"
												color="#ffd317"
												className="me-2"
											/>
											<FaStar
												fontSize="1.2rem"
												color="#f1f1f1"
												className="me-2"
											/>
											<small className="lightColor">11 hours ago</small>
										</div>
										<h6 className="mb-0">
											Our first class with Coach Daniel was AWESOME and our son
											is super excited about the next one!
										</h6>
										<hr />
									</div>
								);
							})}
							<h6 className="greenColor">
								See all reviews <RiArrowRightSLine fontSize="1.1rem" />
							</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PublicEventBody;
