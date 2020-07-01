import CustomAppBar from "../src/CustomAppBar";
import Navigation from "../src/Navigation";
import Footer from "../src/Footer";
import Head from "next/head";
import {
	Container,
	makeStyles,
	Grid,
	Typography,
	Divider,
} from "@material-ui/core";
import { Room, Phone, Email } from "@material-ui/icons";
import { branches } from "../src/data";

const useStyles = makeStyles((theme) => ({
	root: { padding: theme.spacing(2, 1) },
	branch: { padding: theme.spacing(2, 0) },
}));
function Contact() {
	const classes = useStyles();
	return (
		<div>
			<Head>
				<title> Contact | Datamex College of Saint Adeline</title>
			</Head>
			<CustomAppBar />
			<Navigation value={4} />
			<Container maxWidth='md' className={classes.root}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={9}>
						<Typography variant='h5'>Contact Us</Typography>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />

						{branches.map((_) => (
							<div key={_.branch} className={classes.branch}>
								<Typography variant='h6'>{_.branch} Branch</Typography>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Room style={{ fontSize: 20, marginRight: 10 }} />
									<Typography variant='body2'>{_.address}</Typography>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Phone style={{ fontSize: 20, marginRight: 10 }} />
									<Typography variant='body2'>{_.phone}</Typography>
								</div>
								{_.email && (
									<div style={{ display: "flex", alignItems: "center" }}>
										<Email style={{ fontSize: 20, marginRight: 10 }} />
										<Typography variant='body2'>{_.email}</Typography>
									</div>
								)}
							</div>
						))}
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}

export default Contact;
