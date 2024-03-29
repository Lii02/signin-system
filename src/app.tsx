import "./styles/app.css";

import { useState, useEffect } from "react";
import { SignIn, History } from "./signIn";
import { backendAddress } from "./util/constants";
import { VscServerEnvironment } from "react-icons/vsc"
import { BiBook } from "react-icons/bi";

function ServerStatus() {
	const [status, setStatus] = useState("");
	
	const checkServer = async () => {
		try {
			const response = await fetch(`${backendAddress}/ping`);
			const data = await response.json();
			console.log(data);
			setStatus("Found");
		} catch (err) {
			setStatus("Not Found");
		}
	}

	useEffect(() => {
		checkServer();

		const id = setInterval(checkServer, 5000);

		return () => {
			clearInterval(id);
		}
	}, []);

	return (
		<div>
			<p>Server status: {status}</p>
		</div>
	)
}

export function App() {
	return (
		<div className="mainContainer">
			<nav className="App head">
				<h1>Sign In</h1>
			</nav>
			<div className="App logic">
				<SignIn />
			</div>
			<div className="App history">
				<h1>Sign in History {<BiBook />}</h1>
				<History />
			</div>
			<div className="App status">
				<h1>Server Status {<VscServerEnvironment />}</h1>
				<ServerStatus />
			</div>
		</div>
	);
}