import React from "react";
import { BrowserRouter } from "react-router-dom";
import { WebRouter, AdminRouter } from "./router";
import { AuthProvider } from "./contexts";

export const App = () => {
	return (
		<>
			<AuthProvider>
				<BrowserRouter>
					<WebRouter />
					<AdminRouter />
				</BrowserRouter>
			</AuthProvider>
		</>
	);
};
