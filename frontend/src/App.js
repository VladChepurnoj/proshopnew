import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import HomeScreen from "./screens/HomeScreen";

const App = () => {
	return (
		<Fragment>
			<Header />
			<main className="py-3">
				<Container>
					<Outlet />
				</Container>
			</main>
			<Footer />
			<ToastContainer />
		</Fragment>
	);
};

export default App;

