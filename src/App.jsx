import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Hero/Hero";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route
					path="/chatbot"
					element={
						<>
							<Sidebar />
							<Main />
						</>
					}
				/>{" "}
			</Routes>
		</Router>
	);
};

export default App;
