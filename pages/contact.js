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
	IconButton,
} from "@material-ui/core";
import { Room, Phone, Email } from "@material-ui/icons";
import { branches } from "../src/data";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Facebook from "../src/Facebook";
const useStyles = makeStyles((theme) => ({
	root: { padding: theme.spacing(2, 1) },
	branch: { padding: theme.spacing(2, 0) },
}));
function Contact() {
	const classes = useStyles();
	const [viewport, setViewport] = React.useState({
		latitude: 14.67695,
		longitude: 120.98064,
		width: "100vw",
		height: "80vh",
		zoom: 10,
	});

	const [selectedBranch, setSelectedBranch] = React.useState(null);
	React.useEffect(() => {
		const listener = (e) => {
			if (e.key === "Escape") {
				setSelectedBranch(null);
			}
		};
		window.addEventListener("keydown", listener);
		return () => {
			window.removeEventListener("keydown", listener);
		};
	}, []);
	return (
		<div>
			<Head>
				<title> Contact | Datamex College of Saint Adeline</title>
			</Head>
			<CustomAppBar />
			<Navigation value={4} />
			<ReactMapGL
				{...viewport}
				mapboxApiAccessToken={process.env.MAPBOX_API}
				mapStyle={process.env.MAPBOX_STYLE}
				onViewportChange={(viewport) => {
					setViewport(viewport);
				}}>
				{branches.map((branch) => (
					<Marker
						key={branch.branch}
						latitude={branch.coordinates[0]}
						longitude={branch.coordinates[1]}>
						<div>
							<IconButton
								disableRipple
								size='small'
								onClick={() => setSelectedBranch(branch)}>
								<Room color='secondary' fontSize='large' />
							</IconButton>
						</div>
					</Marker>
				))}
				{selectedBranch && (
					<Popup
						onClose={() => setSelectedBranch(null)}
						latitude={selectedBranch.coordinates[0]}
						longitude={selectedBranch.coordinates[1]}>
						<Typography variant='h6'>
							Datamex College of Saint Adeline - {selectedBranch.branch}
						</Typography>
						<Typography variant='body2'>{selectedBranch.address}</Typography>
					</Popup>
				)}
			</ReactMapGL>
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
					<Grid item xs={12} sm={3}>
						<Facebook />
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}

export default Contact;
