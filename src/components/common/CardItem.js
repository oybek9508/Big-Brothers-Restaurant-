import React, { useEffect, useState } from "react";
import { capitalize } from "lodash";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Grid, Typography } from "@mui/material";

// utils
import { truncateDescription } from "@/utils/store";

// components
import FoodModal from "../store/FoodModal";

const CardItem = ({ el }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
		if (typeof window !== undefined && window.document) {
			document.body.style.overflow = "hidden";
		}
	};
	const handleClose = () => setOpen(false);

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [open]);

	return (
		<Grid sx={{ mt: "40px" }}>
			<FoodModal
				el={el}
				open={open}
				handleOpen={handleOpen}
				handleClose={handleClose}
			/>
			<Box
				onClick={handleOpen}
				sx={{
					maxWidth: { xs: "100%", sm: "100%", md: 350 },
					position: "relative",
					mt: "100px",
					cursor: "pointer",
				}}
			>
				<Card
					sx={(theme) => ({
						position: "relative",
						mt: "100px",
						borderRadius: "1.5rem",
						boxShadow: theme.shadows[20],
						padding: "1.5rem",
					})}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							width: "100%",
						}}
					>
						<CardMedia
							sx={(theme) => ({
								borderRadius: "50%",
								width: "200px",
								height: "200px",
								zIndex: 1,
								boxShadow: theme.shadows[20],
							})}
							component="img"
							alt="green iguana"
							image={el.image}
						/>
					</Box>
					<CardContent sx={{ mt: "1rem" }}>
						<Typography gutterBottom variant="h5" component="div">
							{capitalize(el.name)}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{truncateDescription(el.description)}
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</Grid>
	);
};

export default CardItem;
