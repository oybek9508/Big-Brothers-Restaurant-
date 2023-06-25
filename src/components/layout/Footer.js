import React from "react";
import { useRouter } from "next/router";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
	const router = useRouter();
	return (
		<Grid
			sx={{
				px: { xs: "2rem", sm: "2rem" },
				py: "3rem",
				height: "10rem",
				bgcolor:
					router.asPath === "/" || router.asPath.substring(0, 2) === "/#"
						? "#fff"
						: "#f2f2f2",
				width: "100%",
				display: "flex",
				flexDirection: { xs: "column", sm: "row" },
				alignItems: "center",
				justifyContent: "flex-start",
			}}
		>
			<Typography sx={{ color: "#444444" }}>@ 2020 내이름</Typography>
		</Grid>
	);
};

export default Footer;
