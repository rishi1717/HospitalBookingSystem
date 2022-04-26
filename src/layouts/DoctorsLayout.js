import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import SickIcon from "@mui/icons-material/Sick"
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded"
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded"
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { Avatar } from "@mui/material"
import { Link } from "react-router-dom"
import Logo from "../static/images/Logo.png"

const linkStyle = {
	padding: "1rem",
	textDecoration: "none",
	color: "white",
}

const drawerWidth = 240

function ResponsiveDrawer(props) {
	const { window, children } = props
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const drawer = (
		<div>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Sniglet&display=swap');
			</style>
			<IconButton>
				<Avatar alt="One Health" src={Logo} />
				<Link style={linkStyle} to="/doctor">
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							fontFamily: "Sniglet",
							fontSize: "1rem",
							color: "#595959",
							fontWeight: "bold",
						}}
					>
						One Health Hospital
					</Typography>
				</Link>
			</IconButton>
			<Toolbar />
			<List>
				<ListItem button sx={{marginTop:2}}>
					<ListItemIcon sx={{ color: "#1976D2" }}>
						<DashboardRoundedIcon />
					</ListItemIcon>
					<ListItemText primary="DashBoard" />
				</ListItem>
				<ListItem button  sx={{marginTop:2}}>
					<ListItemIcon sx={{ color: "#1976D2" }}>
						<SickIcon />
					</ListItemIcon>
					<ListItemText primary="Patients" />
				</ListItem>
				<ListItem button  sx={{marginTop:2}}>
					<ListItemIcon sx={{ color: "#1976D2" }}>
						<DateRangeRoundedIcon />
					</ListItemIcon>
					<ListItemText primary="Schedule" />
				</ListItem>
				<ListItem button  sx={{marginTop:2}}>
					<ListItemIcon sx={{ color: "#1976D2" }}>
						<AssignmentIndRoundedIcon />
					</ListItemIcon>
					<ListItemText primary="Profile" />
				</ListItem>
			</List>
		</div>
	)

	const container =
		window !== undefined ? () => window().document.body : undefined

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					display: { sm: "none" },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Responsive drawer
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar sx={{display:{sm:'none'}}}/>
				{children}
			</Box>
		</Box>
	)
}

export default ResponsiveDrawer
