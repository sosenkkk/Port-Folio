import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import "./NavBar.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const icons=[ <GitHubIcon href="https://github.com/sosenkkk" />, <LinkedInIcon href="https://www.linkedin.com/in/shashank-raj-5bb2a11b6/" />]
const pages = ['Resume', 'About', 'Home'];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = (event) => {
		setAnchorElNav(null);
		console.log(event.target.outerText.toUpperCase());
	};


	return (
		<AppBar sx={{borderBottom:"1px solid aqua", backgroundColor:"black", padding:"0 10% 0 10%"}} position="fixed">
			<Container style={{ backgroundColor: "black" }} maxWidth="xl">
				<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color:"#28c6ed" }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							fontSize:"1.8rem",
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: '#28c6ed',
							textDecoration: 'none',
						}}
					>
						Sosenk
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							sx={{color:"#28c6ed", padding:"0"}}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
								
							}}
						>
							{pages.map((page) => (
								<MenuItem sx={{border:" 1px solid #28c6ed"}} key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center"  >{page}</Typography>
								</MenuItem>

							))
							}

						</Menu>
					</Box>
					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color:"#28c6ed" }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							fontSize:"1.8rem",
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: '#28c6ed',
							textDecoration: 'none',
							
						}}
					>
						Sosenk
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "end" },  }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: '#28c6ed',  display: 'block' }}
							>
								{page}
							</Button>
						))}
						{icons.map((icon) => (
							<Button
								className=''
								key={(Math.random()*100).toString()}
								sx={{ my: 2, color: '#28c6ed',  display: 'block' }}
							>
								{icon}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;