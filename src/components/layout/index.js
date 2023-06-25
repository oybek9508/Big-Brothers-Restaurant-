import React from "react";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";

// components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	const router = useRouter();

	return (
		<Grid
			container
			flexDirection="column"
			sx={{
				width: "100vw",
				height: "100%",
				minHeight: "100vh",
				position: "relative",
				backgroundPosition: "top right",
				backgroundSize: { xs: "50% 60vh", sm: "50% 70vh", md: "40% 80vh" },
				backgroundRepeat: "no-repeat",
				backgroundImage:
					router.asPath !== "/about"
						? "url(/assets/images/bg_main.png)"
						: "none",
			}}
		>
			<Header />
			<Grid sx={{ flex: 1, mt: "4rem" }}>{children}</Grid>
			<Footer />
		</Grid>
	);
};

export default Layout;
