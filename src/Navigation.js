import {
	Container,
	Tabs,
	Tab,
	makeStyles,
	Menu,
	MenuItem,
	Hidden,
	Drawer,
	IconButton,
	Typography,
} from "@material-ui/core";
import { Menu as MenuIcon, Close } from "@material-ui/icons";
import Link from "../src/Link";
const useStyles = makeStyles((theme) => ({
	navigation: {
		"& .MuiLink-underlineHover:hover": {
			textDecoration: "none",
		},
	},
	menuIcon: {
		background: "#101010",
		color: "#fff",
		padding: theme.spacing(1),
		width: 42,
		position: "fixed",
		right: 0,
		top: 0,
		borderRadius: 0,
		borderBottomLeftRadius: 15,
	},
	drawer: {
		width: "100vw",
		height: "100vh",
		background: "rgba(0, 0, 0, 0.8)",
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		color: "#fff",
		"& .MuiLink-underlineHover:hover": {
			textDecoration: "none",
		},
		"& .MuiTypography-colorPrimary": {
			color: "#fff",
		},
	},
	navItem: {
		fontSize: 40,
		fontWeight: 600,
	},
	navBtnSmall: {
		"& .MuiIconButton-root:hover": {
			background: "#000",
		},
	},
}));

function Navigation(props) {
	const classes = useStyles();
	const [admission, setAdmission] = React.useState(null);
	const openAdmission = (e) => {
		if (admission !== e.currentTarget) {
			setAdmission(e.currentTarget);
		}
	};
	const closeAdmission = () => {
		setAdmission(null);
	};

	const [programs, setPrograms] = React.useState(null);
	const openPrograms = (e) => {
		if (programs !== e.currentTarget) {
			setPrograms(e.currentTarget);
		}
	};
	const closePrograms = () => {
		setPrograms(null);
	};

	const [about, setAbout] = React.useState(null);
	const openAbout = (e) => {
		if (about !== e.currentTarget) {
			setAbout(e.currentTarget);
		}
	};
	const closeAbout = () => {
		setAbout(null);
	};

	const [sideMenu, setSideMenu] = React.useState(false);
	const toggleDrawer = () => {
		setSideMenu(!sideMenu);
	};
	return (
		<div>
			<Hidden smUp>
				<div className={classes.navBtnSmall}>
					<IconButton
						className={classes.menuIcon}
						onClick={toggleDrawer}
						disableFocusRipple>
						<MenuIcon />
					</IconButton>
				</div>
			</Hidden>
			<Container maxWidth='lg'>
				<Hidden xsDown>
					<Tabs value={props.value} className={classes.navigation} centered>
						<Tab label='Home' component={Link} href='/' />
						<Tab
							label='Admissions'
							onMouseOver={openAdmission}
							onClick={openAdmission}
						/>
						<Tab
							label='Programs'
							onMouseOver={openPrograms}
							onClick={openPrograms}
						/>
						<Tab
							label='About DCSA'
							onMouseOver={openAbout}
							onClick={openAbout}
						/>
						<Tab label='Contact' component={Link} href='/contact' />
					</Tabs>
				</Hidden>
				{/* Admissions Menu */}
				<Menu
					anchorEl={admission}
					keepMounted
					getContentAnchorEl={null}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "center",
					}}
					open={Boolean(admission)}
					onClose={closeAdmission}
					MenuListProps={{ onMouseLeave: closeAdmission }}>
					<MenuItem component={Link} href='/requirements'>
						Procedure and Requirements
					</MenuItem>
					<MenuItem component={Link} href='/registration'>
						Online Reservation
					</MenuItem>
				</Menu>

				{/* Programs Menu */}
				<Menu
					anchorEl={programs}
					keepMounted
					getContentAnchorEl={null}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "center",
					}}
					open={Boolean(programs)}
					onClose={closePrograms}
					MenuListProps={{ onMouseLeave: closePrograms }}>
					<MenuItem component={Link} href='/college'>
						College
					</MenuItem>
					<MenuItem component={Link} href='/shs'>
						Senior High School
					</MenuItem>
				</Menu>

				{/* About Menu */}
				<Menu
					anchorEl={about}
					keepMounted
					getContentAnchorEl={null}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "center",
					}}
					open={Boolean(about)}
					onClose={closeAbout}
					MenuListProps={{ onMouseLeave: closeAbout }}>
					<MenuItem component={Link} href='/mission'>
						Mission and Vision
					</MenuItem>
					<MenuItem component={Link} href='/school-facilities'>
						School Facilities
					</MenuItem>
				</Menu>
			</Container>
			<Drawer anchor='right' open={sideMenu} onClose={toggleDrawer}>
				<IconButton
					style={{ position: "absolute", top: 0, right: 0 }}
					onClick={toggleDrawer}>
					<Close style={{ color: "#fff" }} />
				</IconButton>
				<div className={classes.drawer}>
					<Typography className={classes.navItem} component={Link} href='/'>
						Home
					</Typography>
					<div>
						<Typography className={classes.navItem}>Admissions</Typography>
						<Typography variant='h6' component={Link} href='/requirements'>
							Procedures and Requirements
						</Typography>
						<br />
						<Typography variant='h6' component={Link} href='/registration'>
							Online Reservation
						</Typography>
					</div>
					<div>
						<Typography className={classes.navItem}>Programs</Typography>
						<Typography variant='h6' component={Link} href='/college'>
							College
						</Typography>
						<br />
						<Typography variant='h6' component={Link} href='/shs'>
							Senior High
						</Typography>
					</div>
					<div>
						<Typography className={classes.navItem}>About Us</Typography>
						<Typography variant='h6' component={Link} href='/mission'>
							Mission & Vision
						</Typography>
						<br />
						<Typography variant='h6' component={Link} href='/school-facilities'>
							School Facilities
						</Typography>
					</div>
					<Typography
						className={classes.navItem}
						component={Link}
						href='/contact'>
						Contact
					</Typography>
				</div>
			</Drawer>
		</div>
	);
}

export default Navigation;
