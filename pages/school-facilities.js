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
import Facebook from "../src/Facebook";
import { facilities } from "../src/data";
import ProgressiveImage from "react-progressive-image";
const useStyles = makeStyles((theme) => ({
	root: { padding: theme.spacing(4, 1) },
	facility: { padding: theme.spacing(2, 0) },
}));
function Facilities() {
	const classes = useStyles();
	return (
		<div>
			<Head>
				<title>School Facilities | Datamex College of Saint Adeline</title>
			</Head>
			<CustomAppBar />
			<Navigation value={3} />
			<Container maxWidth='md' className={classes.root}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={9}>
						<Typography variant='h5'>School Facilities</Typography>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />
						{facilities.map((f) => (
							<div className={classes.facility} key={f.title}>
								<Typography variant='h6'>{f.title}</Typography>
								<Typography variant='body2' gutterBottom>
									{f.desc}
								</Typography>
								<Grid container spacing={2}>
									{f.images.map((image) => (
										<Grid item xs={12} sm={6} key={image.img}>
											<ProgressiveImage
												src={image.img}
												placeholder={image.thumbnail}>
												{(src) => (
													<img
														src={src}
														alt={f.title}
														style={{
															width: "100%",
															borderRadius: 15,
															border: "solid 1px #ccc",
														}}
													/>
												)}
											</ProgressiveImage>
										</Grid>
									))}
								</Grid>
							</div>
						))}
					</Grid>
					<Grid item xs={12} sm={3}>
						<Facebook />
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}

export default Facilities;
