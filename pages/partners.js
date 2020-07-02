import CustomAppBar from "../src/CustomAppBar";
import Navigation from "../src/Navigation";
import Footer from "../src/Footer";
import Head from "next/head";
import {
	makeStyles,
	Container,
	Grid,
	Typography,
	Divider,
} from "@material-ui/core";
import ProgressiveImage from "react-progressive-image";
import Facebook from "../src/Facebook";

const useStyles = makeStyles((theme) => ({
	root: { padding: theme.spacing(4, 1) },
}));
function Partners() {
	const classes = useStyles();
	return (
		<div>
			<Head>
				<title> Partners | Datamex College of Saint Adeline</title>
			</Head>
			<CustomAppBar />
			<Navigation value={0} />
			<Container maxWidth='md' className={classes.root}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={9}>
						<Typography variant='h5'>
							DCSA is now Certiport accredited center
						</Typography>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />
						<ProgressiveImage
							src='https://i.imgur.com/O8rodpg.png'
							placeholder='https://i.imgur.com/O8rodpgt.png'>
							{(src) => (
								<img
									src={src}
									alt='certiport'
									style={{
										width: "100%",
										borderRadius: 10,
										border: "solid 1px #ccc",
									}}
								/>
							)}
						</ProgressiveImage>
						<br />
						<br />
						<Typography variant='body1'>
							Be Microsoft Certified Professional in:
						</Typography>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />
						<Grid container spacing={2}>
							<Grid item xs={4}>
								<ProgressiveImage
									src='https://i.imgur.com/dXA4097.png'
									placeholder='https://i.imgur.com/dXA4097t.png'>
									{(src) => (
										<img
											src={src}
											alt='microsoft_specialist'
											style={{
												width: "100%",
												borderRadius: 10,
												border: "solid 1px #ccc",
											}}
										/>
									)}
								</ProgressiveImage>
							</Grid>

							<Grid item xs={4}>
								<ProgressiveImage
									src='https://i.imgur.com/GI1IiGs.png'
									placeholder='https://i.imgur.com/GI1IiGst.png'>
									{(src) => (
										<img
											src={src}
											alt='microsoft_associate'
											style={{
												width: "100%",
												borderRadius: 10,
												border: "solid 1px #ccc",
											}}
										/>
									)}
								</ProgressiveImage>
							</Grid>

							<Grid item xs={4}>
								<ProgressiveImage
									src='https://i.imgur.com/nFZqpyc.png'
									placeholder='https://i.imgur.com/nFZqpyct.png'>
									{(src) => (
										<img
											src={src}
											alt='microsoft_educator'
											style={{
												width: "100%",
												borderRadius: 10,
												border: "solid 1px #ccc",
											}}
										/>
									)}
								</ProgressiveImage>
							</Grid>
						</Grid>
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

export default Partners;
