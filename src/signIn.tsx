import "./styles/signIn.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignInData } from "./util/types";
import { addSignIn } from "./slice";
import { RootState } from "./reducers";
import { backendAddress } from "./util/constants";

export function SignIn() {
	const dispatch = useDispatch();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [additionalInfo, setAdditionalInfo] = useState("");

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!firstName || !lastName) {
			alert("The first and/or last name box is empty!");
			return;
		}

		// Create the data based off the preestablished type
		const data: SignInData = {
			first: firstName,
			last: lastName,
			timestamp: new Date().valueOf(),
			additional: additionalInfo,
		};

		dispatch(addSignIn(data));

		let jsonData = JSON.stringify({
			"firstName": data.first,
			"lastName": data.last,
			"timestamp": data.timestamp,
			"additionalNotes": data.additional
		});

		try {
			let response = await fetch(`${backendAddress}/signin`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: jsonData
			});
		} catch(error) {
			console.log(error);
		}
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
			return <></>;
		return (
			<ol>
				{log.map((data, index) => (
					<li key={index}>{data.first} {data.last}, {new Date(data.timestamp).toLocaleString()}</li>
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