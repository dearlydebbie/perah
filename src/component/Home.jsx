import React from "react";
import Products from "./Products";

const Home = () => {
	return (
		<div className="hero">
			<div className="card bg-dark text-white border-0">
				<img
					className="card-img"
					src="/assets/8.jpg"
					alt="background"
					height="600px"
				/>
				<div className="card-img-overlay d-flex flex-column justify-content-center">
					<div className="container">
						<h5 className="card-title display-3 fw-bolder mb-0">
							SUMMER COLLECTION
						</h5>
						<p className="card-text lead fs-2">CHECK OUT OUR LATEST TRENDS</p>
					</div>
				</div>
			</div>
      <Products/>
		</div>
	);
};

export default Home;