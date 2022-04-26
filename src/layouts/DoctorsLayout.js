import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import SickIcon from '@mui/icons-material/Sick';
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded"
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded"
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import { AppBar, Avatar, IconButton, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Logo from "../static/images/Logo.png"

const linkStyle = {
	textDecoration: "none",
	color: "white",
}
const drawerWidth = "17%"

const ResponsiveDrawer = (props) => {
	const { window, children } = props
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const drawer = (
		<div style={{ height: "100vh", backgroundColor: "#1976D2", display:'flex',flexDirection:'column'}}>
			<IconButton sx={{ p: 1 }}>
				<Link style={linkStyle} to="/">
					<Avatar alt="One Health" src={Logo} />
				</Link>
				<style>
					@import
					url('https://fonts.googleapis.com/css2?family=Sniglet&display=swap')
				</style>
				<Link style={linkStyle} to="/">
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							fontFamily: "Sniglet",
							fontSize: "1rem",
							color: "white",
							mr: 2,
							display: { xs: "none", sm: "flex" },
						}}
					>
						One Health Hospital
					</Typography>
				</Link>
			</IconButton>
			<List sx={{mt:'30%', height:'50vh', display:'flex',flexDirection:'column', WebkitJustifyContent:'space-around' }}>
				<ListItem button>
					<ListItemIcon sx={{ color: "white" }}>
						<DashboardRoundedIcon />
					</ListItemIcon>
					<ListItemText sx={{ color: "white" }} primary="Dashboard" />
				</ListItem>
				<ListItem button>
					<ListItemIcon sx={{ color: "white" }}>
						<SickIcon />
					</ListItemIcon>
					<ListItemText sx={{ color: "white" }} primary="Patients" />
				</ListItem>
				<ListItem button>
					<ListItemIcon sx={{ color: "white" }}>
						<DateRangeRoundedIcon />
					</ListItemIcon>
					<ListItemText sx={{ color: "white" }} primary="Schedule" />
				</ListItem>
				<ListItem button>
					<ListItemIcon sx={{ color: "white" }}>
						<AssignmentIndRoundedIcon />
					</ListItemIcon>
					<ListItemText sx={{ color: "white" }} primary="Profile" />
				</ListItem>
			</List>
		</div>
	)

	const container =
		window !== undefined ? () => window().document.body : undefined

	return (
		<>
			<AppBar
				sx={{
					display: { xs: "block", sm: "none" },
					width: { xs: `calc(100% - ${drawerWidth}px)` },
					ml: { xs: `${drawerWidth}px` },
					backgroundColor: "white",
				}}
			>
				<Toolbar>
					<IconButton
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ fontFamily: "Sniglet", color: "#595959" }}
					>
						One Health Hospital
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar sx={{display:{xs:'block',sm:'none'}}}/>
			<Box sx={{ display: "flex" }}>
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
							backgroundColor: "#1976D2",
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

				<Box>{children}</Box>
			</Box>
		</>
	)
}

export default ResponsiveDrawer
