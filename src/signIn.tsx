import "./styles/signIn.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignInData } from "./types";
import { addSignIn } from "./slice";
import { RootState } from "./reducers";

export function SignIn() {
	const dispatch = useDispatch();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [additionalInfo, setAdditionalInfo] = useState("");

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!firstName || !lastName) {
			alert("The first and/or last name box is empty!");
			return;
		}

		// Create the data based off the preestablished type
		const data: SignInData = {
			first: firstName,
			last: lastName,
			timestamp: new Date().valueOf() / 1000,
			additional: additionalInfo,
		};

		dispatch(addSignIn(data));

		let req = new XMLHttpRequest();
		req.open("POST", "http://localhost:5000/signin");
		req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
		let jsonData = JSON.stringify({
			"firstName": data.first,
			"lastName": data.last,
			"timestamp": data.timestamp,
			"additionalNotes": data.additional
		});
		req.send(jsonData);
	};

	return (
		<form className="SignIn" onSubmit={onSubmit}>
			<label>
				First Name:
				<input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
			</label>
			<label>
				Last Name:
				<input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
			</label>
			<br />
			<label>
				Additional Info:
				<br />
				<textarea className="widebox" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />
			</label>
			<br />
			<button type="submit">Submit</button>
		</form>
	);
}

export function History() {
	const log = useSelector((state: RootState) => {
		return state.log;
	});
	const hasHistory = log.length > 0;

	// Draw a list if the log has history
	const HistoryList = () => {
		if(!hasHistory)
			return <div></div>;
		return (
			<ol>
				{log.map((data, index) => (
					<li key={index}>Name: {data.first} {data.last} | Timestamp: {new Date(data.timestamp * 1000).toLocaleString()}</li>
				))}
			</ol>
		);
	}

	return (
		<div className="History">
			<HistoryList />
		</div>
	);
}