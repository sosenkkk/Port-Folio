import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from "./NavBar.module.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AdbIcon from '@mui/icons-material/Adb';
const icons = [<a className={styles.link_navbar} target="_blank" rel="noopener noreferrer" href='https://github.com/sosenkkk' ><GitHubIcon /></a>,<a className={styles.link_navbar} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shashank-raj-5bb2a11b6/"><LinkedInIcon /></a>];
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {

	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const buttonClicked=event=>{
		props.onButtonClick(event.target.outerText);
	}

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: "#28c6ed" }}>


			<Typography variant="h5" sx={{ my:2.2 }}>
				<AdbIcon sx={{ display: { xs: '', md: 'none' }, mr: 1, color: "#28c6ed", position: "relative", top: "5px" }} />
				Sosenk
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton onClick={buttonClicked} sx={{ textAlign: 'center', border: "1px solid #28c6ed", borderLeft: "none", borderRight: "NONE" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
				{icons.map((item) => (
					<ListItem key={Math.random().toString()} disablePadding>
						<ListItemButton sx={{ textAlign: 'center', border: "1px solid #28c6ed", borderLeft: "none", borderRight: "NONE" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar component="nav" sx={{ backgroundColor: "black", color: "#28c6ed", padding: "6px 10%", borderBottom: "1px solid #28c6ed" }}  >
				<Toolbar disableGutters >
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { md: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: "#28c6ed" }} />

					<Typography
						variant="h5"
						href='/'
						noWrap
						component='a'
						sx={{
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.2rem',
							textDecoration: 'none', color: '#28c6ed', flexGrow: 1, display: { xs: 'none', md: 'block' },
							pointerEvents:'none'
						}}
						
					>
						<div className={styles.logo_butt}  >
							Sosenk
						</div>
					</Typography>
					
					<Box sx={{ display: { xs: 'none', md: 'block' } }}>
						{navItems.map((item) => (
							<button className={styles.navbarButtons} onClick={buttonClicked}  key={item}  >
								{item}
							</button>
						))}
						{icons.map((item) => (
							<button className={styles.navbarButtons} style={{position:"relative", top:"4px"}} key={Math.random().toString()} >
								{item}
							</button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav" sx={{ backgroundColor: "black" }} >
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', md: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'black' },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}

DrawerAppBar.propTypes = {
	window: PropTypes.func,
};

export default DrawerAppBar;