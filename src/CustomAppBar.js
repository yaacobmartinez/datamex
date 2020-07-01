import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	Button,
	Hidden,
	makeStyles,
} from "@material-ui/core";
import { Phone, MailOutline } from "@material-ui/icons";
import Link from "./Link";
const useStyles = makeStyles((theme) => ({
	appbar: {
		background: "transparent",
		color: "#000",
		padding: theme.spacing(2, 0, 2, 0),
		"& .MuiLink-underlineHover:hover": {
			textDecoration: "none",
		},
	},
	logo: { height: 50, marginRight: 20 },
	title: { fontSize: 30 },
	toolbar: { [theme.breakpoints.down("xs")]: { flexDirection: "column" } },
	contacts: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
			alignItems: "center",
		},
	},
	contact: { display: "flex", alignItems: "center" },
	rightAppBarContent: {
		textAlign: "right",
		[theme.breakpoints.down("xs")]: { textAlign: "center" },
	},
	apply: {
		textTransform: "none",
		[theme.breakpoints.down("xs")]: { display: "none" },
	},
}));
function CustomAppBar() {
	const classes = useStyles();
	return (
		<div>
			<AppBar className={classes.appbar} elevation={0} position='static'>
				<Container maxWidth='lg'>
					<Toolbar className={classes.toolbar}>
						{/* Left AppBar Content(logo, title) */}
						<div style={{ flex: 1, display: "flex", alignItems: "center" }}>
							<img src='/images/logo.png' alt='logo' className={classes.logo} />
							<Hidden smDown>
								<Typography className={classes.title}>
									Datamex College of Saint Adeline
								</Typography>
							</Hidden>
							<Hidden mdUp>
								<Typography style={{ fontWeight: 500 }}>
									Datamex College of Saint Adeline
								</Typography>
							</Hidden>
						</div>
						{/* Right AppBar Content(contacts, apply button) */}
						<div className={classes.rightAppBarContent}>
							<div className={classes.contacts}>
								<div className={classes.contact}>
									<Phone style={{ fontSize: 15 }} />
									<Typography variant='caption'>(02) 921 8350</Typography>
								</div>
								<div className={classes.contact}>
									<MailOutline style={{ fontSize: 15 }} />
									<Typography variant='caption'>
										datamex_registrar@stadeline.edu.ph
									</Typography>
								</div>
							</div>
							<Button
								variant='contained'
								color='secondary'
								component={Link}
								href='/registration'
								className={classes.apply}>
								Apply Online
							</Button>
						</div>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
}

export default CustomAppBar;
