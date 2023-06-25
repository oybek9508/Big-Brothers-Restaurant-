/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";

//data
import { navItems } from "@/data/navigation";

const customStyle = {
	fontFamily: "PT_Serif",
	textTransform: "capitalize",
	fontSize: "20px",
	fontWeight: 300,
};

const DrawerAppBar = () => {
	const router = useRouter();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [bgColor, setBgColor] = useState("transparent");
	const navRef = useRef();
	let container = useRef(null);
	const windowSize = useRef(
		typeof window !== "undefined" ? window.innerWidth : undefined
	);
	navRef.current = bgColor;

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	useEffect(() => {
		const handleWindowResize = () => {
			windowSize.current = window.innerWidth;
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	console.log("windowSize", windowSize);

	useEffect(() => {
		if (window !== undefined) {
			container.current = () => window.document.body;
		}
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 60;

			if (show) {
				setBgColor("#fff");
			} else {
				setBgColor("transparent");
			}
		};
		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List>
				<ListItem key={navItems[0].title} disablePadding sx={{ width: "30%" }}>
					<ListItemButton
						onClick={() => {
							router.push(navItems[0].link);
							setTimeout(() => {
								handleDrawerToggle();
							}, 1000);
						}}
					>
						<ListItemText
							primary={navItems[0].title}
							sx={{
								borderBottom:
									router.pathname === "/about" && "3px solid #DAE952",
							}}
						/>
					</ListItemButton>
				</ListItem>
				<ListItem key={navItems[1].title} disablePadding sx={{ width: "30%" }}>
					<ListItemButton
						{...(router.asPath !== "/" && {
							onClick: () => {
								router.replace(`/#${navItems[1].link}`);
								setTimeout(() => router.push(`/#${navItems[1].link}`), 1000);
							},
						})}
					>
						<ListItemText
							primary={navItems[1].title}
							sx={{
								borderBottom: router.pathname === "/" && "3px solid #DAE952",
							}}
						/>
					</ListItemButton>
				</ListItem>
			</List>
		</div>
	);

	return (
		<Box
			sx={{
				display: "flex",
				zIndex: 99999,
			}}
		>
			<AppBar
				component="nav"
				position="fixed"
				sx={{
					bgcolor:
						router.asPath === "/" || router.asPath.substring(0, 2) === "/#"
							? bgColor
							: "#f2f2f2",
					boxShadow: "none",
				}}
			>
				<Toolbar
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Box
						sx={{
							display: { xs: "flex", md: "none" },
							justifyContent: "flex-start",
							width: "100%",
						}}
					>
						<IconButton
							color="#000"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, ...(mobileOpen && { display: "block" }) }}
						>
							<MenuIcon />
						</IconButton>
					</Box>

					<Box sx={{ flex: 1, display: { xs: "none", md: "block" } }}>
						<Button
							sx={{
								color: bgColor === "transparent" ? "#535353" : "#444444",
							}}
							onClick={() => router.push("/")}
						>
							<Typography
								component="div"
								fontFamily="Rufina"
								sx={{
									display: {
										fontSize: "24px",
										xs: "none",
										sm: "block",
										cursor: "pointer",
										textTransform: "capitalize",
									},
								}}
							>
								AWESOME FOOD STORE
							</Typography>
						</Button>
					</Box>
					<Box
						sx={{
							display: { xs: "none", md: "block" },
							position: "absolute",
						}}
					>
						<Button
							onClick={() => {
								router.push(navItems[0].link);
							}}
							sx={{
								...customStyle,
								color: {
									color: bgColor === "transparent" ? "#ACACAC" : "#444444",
								},
								borderBottom:
									router.pathname === "/about" && "3px solid #DAE952",
							}}
						>
							{navItems[0].title}
						</Button>

						<Button
							{...(router.asPath !== "/" && {
								onClick: () => {
									router.replace(`/#${navItems[1].link}`);
									setTimeout(() => router.push(`/#${navItems[1].link}`), 1000);
								},
							})}
							sx={{
								...customStyle,
								color: {
									color: bgColor === "transparent" ? "#ACACAC" : "#444444",
								},
								borderBottom: router.pathname === "/" && "3px solid #DAE952",
							}}
						>
							{navItems[1].title}
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: windowSize.current }}
				aria-label="mailbox folders"
			>
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "block", md: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: windowSize.current,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
};

export default DrawerAppBar;
