import * as React from "react";
import { Grid } from "@mui/material";
import CardItem from "./CardItem";

const CardMenu = ({ store }) => {
	return (
		<Grid
			id="store"
			container
			justifyContent="center"
			alignItems="center"
			sx={{ bgcolor: "rgba(218, 233, 82, 0.20)", p: "2rem", pb: "5rem" }}
		>
			{store.map((el) => (
				<Grid
					rowSpacing={2}
					item
					xs={12}
					md={6}
					lg={4}
					xl={3}
					key={el.id}
					sx={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
					}}
				>
					<CardItem el={el} />
				</Grid>
			))}
		</Grid>
	);
};

export default CardMenu;
