import React from "react";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, CardMedia, Grid } from "@mui/material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const FoodBanner = ({ storeImages }) => {
	return (
		<Grid
			sx={{
				py: "4rem",
				pt: 0,
				height: { xs: "50vh", sm: "60vh", md: "70vh" },
			}}
		>
			<Swiper
				effect={"fade"}
				loop
				autoplay={{
					delay: 3000,
				}}
				modules={[Autoplay]}
				slidesPerView={1}
				style={{ width: "90vw" }}
			>
				{storeImages &&
					storeImages.map((image) => (
						<SwiperSlide key={image} style={{ width: "100vw" }}>
							<Grid
								container
								justifyContent="flex-end"
								sx={{
									justifyContent: "center",
									position: "relative",
									alignItems: "center",
									width: "90vw",
									height: { xs: "50vh", sm: "60vh", md: "70vh" },
									top: 0,
								}}
							>
								<Box
									sx={(theme) => ({
										width: { xs: "84vw", sm: "43vh", md: "52vh" },
										height: { xs: "84vw", sm: "43vh", md: "52vh" },
										borderRadius: "50%",
										border: "3px solid #DAE952",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										boxShadow: theme.shadows[10],
										bgcolor: "#fff",
									})}
								>
									<CardMedia
										component="img"
										src={image}
										alt="banner image"
										sx={{
											width: { xs: "80vw", sm: "40vh", md: "48vh" },
											height: { xs: "80vw", sm: "40vh", md: "48vh" },
											borderRadius: "50%",
										}}
									/>
								</Box>
							</Grid>
						</SwiperSlide>
					))}
			</Swiper>
		</Grid>
	);
};

export default FoodBanner;
