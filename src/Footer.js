import { makeStyles, Grid, Typography, Container } from "@material-ui/core";
import Link from "./Link";
import { Room, Facebook } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
		background: "#808080",
		"& .MuiLink-underlineHover:hover": {
			textDecoration: "none",
		},
	},
	copyright: { background: "#101010", padding: theme.spacing(2) },
	link: { color: "#fff" },
	contact: { display: "flex", alignItems: "flex-start" },
	icon: { fontSize: 18, color: "#fff", marginRight: 10 },
}));
function Footer() {
	const classes = useStyles();
	return (
		<>
			<div className={classes.root}>
				<Container maxWidth='md'>
					<Grid container spacing={2}>
						{/* Programs */}
						<Grid item xs={12} sm={3}>
							<Typography variant='h6' className={classes.link}>
								Programs
							</Typography>
							<Typography
								variant='caption'
								component={Link}
								href='/shs'
								className={classes.link}>
								Senior High School
							</Typography>
							<br />
							<Typography
								variant='caption'
								component={Link}
								href='/college'
								className={classes.link}>
								College
							</Typography>
						</Grid>

						{/* Admissions */}
						<Grid item xs={12} sm={3}>
							<Typography variant='h6' className={classes.link}>
								Admissions
							</Typography>
							<Typography
								variant='caption'
								component={Link}
								href='/requirements'
								className={classes.link}>
								Procedures and Requirements
							</Typography>
							<br />
							<Typography
								variant='caption'
								component={Link}
								href='/registration'
								className={classes.link}>
								Online Reservation
							</Typography>
						</Grid>

						{/* Other Links */}
						<Grid item xs={12} sm={3}>
							<Typography variant='h6' className={classes.link}>
								Other Link
							</Typography>
							<Typography
								variant='caption'
								component={Link}
								href='/partners'
								className={classes.link}>
								Microsoft Certification
							</Typography>
						</Grid>

						{/* Contact */}
						<Grid item xs={12} sm={3}>
							<Typography className={classes.link}>Contact</Typography>
							<div className={classes.contact}>
								<Room className={classes.icon} />
								<Typography variant='caption' className={classes.link}>
									85 Commonwealth Ave, Greater Fairview, Quezon City, 1118 Metro
									Manila.
								</Typography>
							</div>
							<div className={classes.contact}>
								<Facebook className={classes.icon} />
								<Typography variant='caption' className={classes.link}>
									DatamexOfficial2016
								</Typography>
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
			<div className={classes.copyright}>
				<Container
					maxWidth='md'
					style={{ display: "flex", justifyContent: "space-evenly" }}>
					<Typography variant='caption' className={classes.link}>
						© 2020 Datamex College of Saint Adeline · All rights reserved
					</Typography>
					<Typography variant='caption' className={classes.link}>
						Developed by JCBMTZ
					</Typography>
				</Container>
			</div>
		</>
	);
}

export default Footer;
