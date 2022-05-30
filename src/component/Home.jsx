import React from "react";

const Home = () => {
	return (
		<div className="hero">
			<div class="card bg-dark text-white border-0">
				<img
					class="card-img"
					src="/assets/8.jpg"
					alt="background"
					height="550px"
				/>
				<div class="card-img-overlay d-flex flex-column justify-content-center">
					<div className="container">
						<h5 class="card-title display-3 fw-bolder mb-0">SUMMER ARRIVALS</h5>
						<p class="card-text lead fs-2">
							CHECK OUT OUR LATEST TRENDS
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
