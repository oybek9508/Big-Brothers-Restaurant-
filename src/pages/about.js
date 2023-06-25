import React from "react";
import { Grid, Typography } from "@mui/material";

// data
import { about } from "@/data/about";

// components
import Layout from "@/components/layout";

const About = () => {
	return (
		<Layout>
			<Grid sx={{ p: "5rem" }}>
				<Typography>{about}</Typography>
			</Grid>
		</Layout>
	);
};

export default About;
