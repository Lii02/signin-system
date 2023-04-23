import "./signIn.css";
import React from "react";

export function SignIn() {
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		if (!firstName || !lastName) {
			alert("One or more boxes are empty!");
			return;
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
			<button type="submit">Submit</button>
		</form>
	);
}

export function History() {
	return (
		<div className="History">
		</div>
	);
}