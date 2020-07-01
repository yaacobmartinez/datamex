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
} from "@material-ui/core";
import LatestNews from "../src/LatestNews";
import { tracks } from "../src/data";
import { ExpandMore } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
	root: { padding: theme.spacing(2, 1) },
}));
function SeniorHigh() {
	const classes = useStyles();
	return (
		<div>
			<Head>
				<title>Senior High School | Datamex College of Saint Adeline</title>
			</Head>
			<CustomAppBar />
			<Navigation value={2} />
			<Container maxWidth='md' className={classes.root}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={9}>
						<Typography variant='h5'>Senior High School</Typography>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />
						<Typography variant='body2'>
							DCSA aims to equip students with knowledge and skills that will
							help them to be prepare better for choosing a right paths.
						</Typography>
						<br />
						<Typography variant='h6' gutterBottom>
							Choose the track you want
						</Typography>
						{tracks.map((_) => (
							<Accordion key={_.title}>
								<AccordionSummary expandIcon={<ExpandMore />}>
									<Typography>{_.title}</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<div>
										<Typography variant='body2'>{_.desc}</Typography>
										<br />
										<Typography variant='caption' color='textSecondary'>
											Choose from the following:
										</Typography>
										{_.tracks.map((track) => (
											<Accordion square key={track.trackCode}>
												<AccordionSummary>
													<Typography>
														{track.trackCode} - {track.trackTitle}
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<div>
														<Typography variant='body2'>
															{track.trackDesc}
														</Typography>
														<br />
														<Typography variant='caption' color='textSecondary'>
															Some of the subjects for {track.trackCode} Strand
														</Typography>
														<ol>
															{track.subjects.map((subject) => (
																<li key={subject}>
																	<Typography variant='body2'>
																		{subject}
																	</Typography>
																</li>
															))}
														</ol>
														{track.specializedSubjects && (
															<>
																<br />
																<Typography
																	variant='caption'
																	color='textSecondary'>
																	Specialized Subjects
																</Typography>
																<ol>
																	{track.specializedSubjects.map((sub) => (
																		<li key={sub}>
																			<Typography variant='body2'>
																				{sub}
																			</Typography>
																		</li>
																	))}
																</ol>
																<br />
															</>
														)}
													</div>
												</AccordionDetails>
											</Accordion>
										))}
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

export default SeniorHigh;
