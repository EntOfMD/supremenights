import React from 'react';

export function Header() {
	return (
		<nav className="navbar navbar-dark navbar-expand-lg">
			<div className="container">
				<a className="navbar-brand" href="/">
					SupremeNights
				</a>
				<form className="form-inline my-2 my-lg-0">
					<input
						className="form-control mr-sm-2 sn-search"
						type="search"
						placeholder="Try '11500' or 'negombo' "
						aria-label="Search"
					/>
					<button className="btn btn-outline-info my-2 my-sm-0 btn-sn-search" type="submit">
						Search
					</button>
				</form>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto">
						<a className="nav-item nav-link active" href="">
							Login <span className="sr-only">(current)</span>
						</a>
						<a className="nav-item nav-link" href="">
							Register
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
