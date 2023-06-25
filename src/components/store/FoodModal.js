import * as React from "react";
import Link from "next/link";
import { capitalize } from "lodash";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardMedia, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
	position: "absolute",
	top: { xs: "5rem", md: "50%" },
	left: { xs: "5%", md: "50%" },
	transform: { xs: "none", md: "translate(-50%, -50%)" },
	width: { xs: "90%", md: "90%" },
	height: { xs: "90vh", md: "700px" },
	bgcolor: "background.paper",
	boxShadow: 24,
	borderRadius: "20px",
	outlineWidth: 0,
	display: "flex",
};

const FoodModal = ({ el, open, handleClose }) => {
	return (
		<Grid>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Button
						onClick={handleClose}
						sx={{
							position: "absolute",
							right: "20px",
							top: "20px",
							bgcolor: "#000",
							color: "#fff",
							"&:hover": {
								bgcolor: "#000",
							},
						}}
					>
						<CloseIcon />
					</Button>
					<Box
						sx={{
							display: "flex",
							width: "100%",
							justifyContent: "space-between",
							flexDirection: { xs: "column", md: "row" },
							alignItems: "center",
						}}
					>
						<Box
							sx={{
								height: "100%",
								width: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<CardMedia
								src={el.image}
								alt="detailed image"
								sx={{
									width: "100%",
									height: "100%",
									borderTopLeftRadius: "20px",
									borderBottomLeftRadius: { xs: "none", md: "20px" },
									borderTopRightRadius: { xs: "20px", md: 0 },
									borderBottomRightRadius: "none",
								}}
								component="img"
							/>
						</Box>
						<Box
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "space-between",
								gridGap: "2rem",
								mt: { xs: "2rem", md: "none" },
							}}
						>
							<Typography id="modal-modal-title" variant="h4" component="h2">
								{capitalize(el.name)}
							</Typography>
							<Typography
								id="modal-modal-description"
								sx={{ mt: 2, width: "80%" }}
							>
								{el.description}
							</Typography>
							{el.url ? (
								<Link href={el.url}>
									<Button
										sx={{
											p: "1rem 4rem",
											bgcolor: "#DAE952",
											color: "#fff",
											lineHeight: 2.5,
											"&:hover": {
												bgcolor: "#DAE952",
											},
										}}
									>
										Find More
									</Button>
								</Link>
							) : (
								<Link href="/_error">
									<Button
										sx={{
											mb: "2rem",
											p: "1rem 4rem",
											bgcolor: "#DAE952",
											color: "#fff",
											lineHeight: 2.5,
											"&:hover": {
												bgcolor: "#DAE952",
											},
										}}
									>
										Find More
									</Button>
								</Link>
							)}
						</Box>
					</Box>
				</Box>
			</Modal>
		</Grid>
	);
};

export default FoodModal;
