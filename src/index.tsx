import "./styles/globals.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { globalStore } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.Fragment>
		<Provider store={globalStore}>
			<App />
		</Provider>
	</React.Fragment>
);