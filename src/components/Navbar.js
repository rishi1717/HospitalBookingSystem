import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import MenuItem from "@mui/material/MenuItem"
import Logo from "../static/images/Logo.png"
import { Link } from "react-router-dom"

const linkStyle = {
	padding: "1rem",
	textDecoration: "none",
	color: "white",
}
const linkStyle2 = {
	padding: "1rem",
	textDecoration: "none",
	color: "black",
}

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null)

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<AppBar position="static" sx={{ borderRadius: "0.6rem" }}>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Sniglet&display=swap');
			</style>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<IconButton sx={{ p: 0, display: { xs: "none", sm: "flex" } }}>
						<Avatar
							sx={{
								display: { xs: "none", sm: "flex" },
							}}
							alt="One Health"
							src={Logo}
						/>
						<Link style={linkStyle} to="/">
							<Typography
								variant="h6"
								noWrap
								component="div"
								sx={{
									fontFamily: "Sniglet",
									fontSize: "1.1rem",
									color: "white",
									mr: 2,
									display: { xs: "none", sm: "flex" },
								}}
							>
								One Health Hospital
							</Typography>
						</Link>
					</IconButton>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", sm: "none" },
							}}
						>
							<MenuItem onClick={handleCloseNavMenu}>
								<Link style={linkStyle2} to="/">
									<Typography textAlign="center">Home</Typography>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Link style={linkStyle2} to="/login">
									<Typography textAlign="center">Login</Typography>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Link style={linkStyle2} to="/register">
									<Typography textAlign="center">Register</Typography>
								</Link>
							</MenuItem>
						</Menu>
					</Box>
					<Box
						sx={{
							flexGrow: 0,
							marginLeft: "auto",
							display: { xs: "flex", sm: "flex" },
						}}
					>
						<Link style={linkStyle} to="/login">
							Login
						</Link>
						<Link style={linkStyle} to="/register">
							Register
						</Link>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default Navbar
