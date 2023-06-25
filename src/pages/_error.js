import React from "react";
import { useRouter } from "next/router";
import { Alert, Box, Button } from "@mui/material";

const Error = ({ statusCode }) => {
	const router = useRouter();

	const onBackButtonClicked = () => {
		if (router?.back) {
			router.back();
		} else {
			router.push("/");
		}
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<Box sx={{ maxWidth: 400, margin: "0 auto" }}>
				<Alert severity="error">
					{statusCode ? `Error ${statusCode}` : "Error"}
				</Alert>
				<Box sx={{ marginTop: "1rem", textAlign: "center" }}>
					<Button
						variant="contained"
						color="primary"
						onClick={onBackButtonClicked}
					>
						Go Back
					</Button>
				</Box>
			</Box>
		</div>
	);
};

export default Error;
