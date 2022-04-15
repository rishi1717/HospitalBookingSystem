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
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import Logo from "../../static/images/Logo.png"
import UserPicture from "../../static/images/userPortrait.png"

const pages = ["Appointments", "Doctors", "Prescriptions", "About"]

const UserNavbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null)

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<AppBar position="static" sx={{ borderRadius: "0.6rem" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<IconButton sx={{ p: 0 }}>
						<Avatar
							sx={{
								display: { xs: "none", md: "flex" },
							}}
							alt="One Health"
							src={Logo}
						/>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{
								fontSize: "0.9rem",
								color: "white",
								mr: 2,
								display: { xs: "none", md: "flex" },
							}}
						>
							One Health Hospital
						</Typography>
					</IconButton>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box
						sx={{
							flexGrow: 0,
							marginLeft: "auto",
							display: { xs: "none", md: "flex" },
						}}
					>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{
									fontSize: "0.7rem",
									my: 2,
									color: "white",
									display: "block",
								}}
							>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<IconButton sx={{ p: 0 }}>
							<Avatar alt="Remy Sharp" src={UserPicture} />
						</IconButton>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default UserNavbar
