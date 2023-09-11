import "./app.css";

import { useState, useEffect } from "react";
import { SignIn, History } from "./signIn";

function ServerStatus() {
	const [status, setStatus] = useState("");
	
	const checkServer = () => {
		fetch("http://127.0.0.1:5000/helloworld").then(() => {
			setStatus("Found");
		}).catch(() => {
			setStatus("Not Found");
		});
	}

	useEffect(() => {
		checkServer();
	});

	return (
		<div>
			<p>Server status: {status}</p>
			<button onClick={() => {
				checkServer();
			}}>Check Status</button>
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
				<h1>Sign in History</h1>
				<History />
			</div>
			<div className="App credits">
				<h1>Credits</h1>
				<p>Luke Inlow</p>
				<h3>API's used</h3>
				<p>ReactJS</p>
				<p>React Redux</p>
				<p>Flask</p>
			</div>
			<div className="App status">
				<h1>Server Status</h1>
				<ServerStatus />
			</div>
		</div>
	);
}