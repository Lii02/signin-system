import "./signIn.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignInData } from "./types";
import { addSignIn } from "./slice";
import { RootState } from "./reducers";

export function SignIn() {
	const dispatch = useDispatch();

	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [additionalInfo, setAdditionalInfo] = React.useState("");

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
			additional: "",
			timestamp: new Date().valueOf()
		};

		dispatch(addSignIn(data));
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
					<li key={index}>Name: {data.first} {data.last}&nbsp;Timestamp: {new Date(data.timestamp).toLocaleString()}</li>
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