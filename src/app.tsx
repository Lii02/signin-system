import "./app.css";
import React from "react";
import { SignIn, History } from "./signIn";

export function App() {
  return (
		<div className="mainContainer">
			<nav className="App nav">
				<h1>Sign In</h1>
			</nav>
			<div className="App form">
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
		</div>
	);
}