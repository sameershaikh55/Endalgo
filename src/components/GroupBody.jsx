import React from "react";
import { FaStar } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import publicBody from "../assets/publicBody.png";
import uProfile from "../assets/uProfile.png";

const GroupBody = () => {
	return (
		<div className="publicEventBody_container mt-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-md-8 mx-auto mt-4">
						<div className="row">
							<div className="col-4">
								<img
									className="borderRound"
									width="100%"
									height="100%"
									src={publicBody}
									alt="publicBody"
								/>
							</div>
							<div className="col-8">
								<div className="d-flex align-items-center">
									<FaStar fontSize="1.2rem" color="#ffd317" className="me-2" />
									<div className="lightColor">4.5 (21)</div>
								</div>
								<h4 className="mt-2 fw-bold">
									los angeles endalgo public pickup soccer event - let together
								</h4>
								<h6 className="lightColor my-3 d-none d-md-block">
									Public group ・ Los Angeles, CA ・ 326 Members
								</h6>
								<div className="d-none d-md-block">
									<button className="themeBtn3 px-3 py-1 me-3">
										Sport Type
									</button>
									<button className="themeBtn3 px-3 py-1">Group Type</button>
								</div>
							</div>
							<h6 className="lightColor my-3 d-block d-md-none">
								Public group ・ Los Angeles, CA ・ 326 Members
							</h6>
							<div className="d-block d-md-none">
								<button className="themeBtn3 px-3 py-1 me-3">Sport Type</button>
								<button className="themeBtn3 px-3 py-1">Group Type</button>
							</div>
						</div>
						<br />
						<hr />
						<br />
						<div className="description">
							<h4 className="fw-bold">About us</h4>
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
						<br />
						<hr />
						<br />
						<div>
							<h4 className="fw-bold">Upcoming Events</h4>
							{[1, 1].map((prev, i) => {
								return (
									<div key={i} className="row cardContainer mt-3">
										<div className="eventCard borderRound col-12 p-3">
											<div className="row">
												<div className="col-5">
													<img
														className="borderRound"
														width="100%"
														src={publicBody}
														alt="publicBody"
													/>
												</div>
												<div className="col-7">
													<h6 className="redColor">Sun, Jun 06 5:30 PM</h6>
													<h5 className="mt-2 fw-bold">
														los angeles endalgo public pickup soccer event - let
														together
													</h5>
													<h6 className="lightColor my-3">
														Playa Vista Sports Park
													</h6>
													<h6 className="greenColor">12 people are going</h6>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<br />
						<hr />
						<br />
						<div>
							<h4 className="fw-bold">Training / Coaching</h4>
							{[1, 1].map((prev, i) => {
								return (
									<div key={i} className="row cardContainer mt-3">
										<div className="eventCard borderRound col-12 p-3">
											<div className="row">
												<div className="col-5">
													<img
														className="borderRound"
														width="100%"
														src={publicBody}
														alt="publicBody"
													/>
												</div>
												<div className="col-7">
													<h5 className="mt-2 fw-bold">
														Offside Soccer - Sunday Morning 11v11 Games
													</h5>
													<h6 className="lightColor my-3">
														Starting at $75/Session
													</h6>
													<h6 className="lightColor">
														Irish Ex-Professional player with 15years coaching
														experience, focusing on player development, both
														technical and tactical, while…
													</h6>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<br />
						<hr />
						<br />

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

export default GroupBody;
