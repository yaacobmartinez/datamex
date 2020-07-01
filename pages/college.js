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
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Button,
} from "@material-ui/core";
import LatestNews from "../src/LatestNews";
import { ExpandMore } from "@material-ui/icons";
import Link from "../src/Link";
import { courses } from "../src/data";
const useStyles = makeStyles((theme) => ({
	root: { padding: theme.spacing(4, 1) },
}));

function College() {
	const classes = useStyles();
	return (
		<div>
			<Head>
				<title>College | Datamex College of Saint Adeline</title>
			</Head>
			<CustomAppBar />
			<Navigation value={2} />
			<Container maxWidth='md' className={classes.root}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={9}>
						<Typography variant='h5'>College Programs</Typography>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />
						<Typography variant='h6'>
							Choose the course for your future
						</Typography>
						<Typography variant='body2'>
							DCSA offers an indemand degree programs and specializations from
							the following:
						</Typography>

						{courses.map((_) => (
							<Accordion>
								<AccordionSummary expandIcon={<ExpandMore />}>
									<Typography>{_.title}</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<div>
										<Typography variant='body2'>
											<span style={{ fontWeight: 500 }}>{_.title}</span>{" "}
											{_.code} {_.description}
										</Typography>
										<br />
										{_.awarded && (
											<>
												<Typography variant='body2'>{_.awarded}</Typography>
												<br />
											</>
										)}
										<Typography variant='body2'>
											Some of the subjects that you may take during the course
											of your study include:
										</Typography>
										<ul>
											{_.subjects.map((subject) => (
												<li>
													<Typography variant='body2'>{subject}</Typography>
												</li>
											))}
										</ul>
										<Typography variant='body2'>{_.desc2}</Typography>
										<br />
										<Typography variant='button'>Careers</Typography>
										<Typography variant='body2'>
											Qualified graduates of {_.code} can find employment as any
											of the following:
										</Typography>
										<ul>
											{_.careers.map((career) => (
												<li>
													<Typography variant='body2'>{career}</Typography>
												</li>
											))}
										</ul>
										<Button
											component={Link}
											href='/registration'
											variant='contained'
											color='secondary'>
											Reserve Now
										</Button>
									</div>
								</AccordionDetails>
							</Accordion>
						))}
					</Grid>
					<Grid item xs={12} sm={3}>
						<LatestNews />
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}

export default College;
