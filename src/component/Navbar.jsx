import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
				<div className="container">
					<NavLink className="navbar-brand fw-bold fs-4" to="/">
						PERAH
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink className="nav-link active" to="/" aria-current="page">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/products">
									Products
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/about">
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/contact">
									Contact
								</NavLink>
							</li>
						</ul>
						<div className="buttons">
							<NavLink to="/join" className="btn btn-outline-dark">
								<i className="fa fa-user-plus me-1"></i>Join
							</NavLink>
							<NavLink to="/login" className="btn btn-outline-dark ms-2">
								<i className="fa fa-sign-in me-1"></i>Login
							</NavLink>
							<NavLink to="/cart" className="btn btn-outline-dark ms-2">
								<i className="fa fa-shopping-cart me-1"></i>Cart (0)
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
