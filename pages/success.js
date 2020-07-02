import CustomAppBar from "../src/CustomAppBar";
import Navigation from "../src/Navigation";
import Footer from "../src/Footer";
import Head from "next/head";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: { padding: theme.spacing(4, 0), height: "65vh" },
	message: { padding: theme.spacing(4), display: "flex", alignItems: "center" },
	icon: { fontSize: 100, color: "#689f38", marginRight: theme.spacing(2) },
}));
function Success() {
	const classes = useStyles();
	return (
		<div>
			<Head>
				<title>Registration Success | Datamex College of Saint Adeline</title>
			</Head>
			<CustomAppBar />
			<Navigation value={1} />
			<Container maxWidth='md' className={classes.root}>
				<div className={classes.message}>
					<CheckCircle className={classes.icon} />
					<div>
						<Typography variant='h5'>
							You have Registered Successfully!
						</Typography>
						<Typography variant='body2'>
							You will be contacted by the DCSA Team once your registration has
							been reviewed.
						</Typography>
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	);
}

export default Success;
