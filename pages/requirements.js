import CustomAppBar from "../src/CustomAppBar";
import Navigation from "../src/Navigation";
import Footer from "../src/Footer";
import Head from "next/head";
import {
	Grid,
	Typography,
	Container,
	makeStyles,
	Divider,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import LatestNews from "../src/LatestNews";
const useStyles = makeStyles((theme) => ({
	root: { padding: theme.spacing(4, 1) },
}));
const steps = [
	{
		step: 1,
		content:
			"Submit birth certificate, report card, 2x2 picture and certification of good moral character from previous school to the Admissions Office.",
	},
	{ step: 2, content: "Accomplish the student's Application form." },
	{
		step: 3,
		content:
			"Proceed to the Principal's office for the oral interview by any member of the Screening Committee.",
	},
	{
		step: 4,
		content:
			"Take the entrance examinations scheduled by the Admission Office.",
	},
	{
		step: 5,
		content:
			"The passing applicant will be asked to accomplish the reservation form for the school year.",
	},
];
function Requirements() {
	const classes = useStyles();
	return (
		<div>
			<Head>
				<title>Requirements | Datamex College of Saint Adeline</title>
			</Head>
			<CustomAppBar />
			<Navigation value={1} />
			<Container maxWidth='md' className={classes.root}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={9}>
						<Typography variant='h5'>Admission Procedures</Typography>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />
						<Typography variant='subtitle1'>
							An applicant student must follow the registration procedure
							conducted within the school admission
						</Typography>
						<div style={{ marginLeft: 20, marginTop: 20 }}>
							{steps.map((_) => (
								<Typography variant='body2'>
									{_.step}. {_.content}
								</Typography>
							))}
						</div>

						<Typography variant='h5' style={{ marginTop: 40 }}>
							Enrolment Requirements
						</Typography>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />
						<Typography variant='subtitle1'>
							The following requirements must be submitted to the Registrar's
							Office for admission.
						</Typography>

						<Accordion defaultExpanded>
							<AccordionSummary expandIcon={<ExpandMore />}>
								<Typography>Senior High School</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<div>
									<Typography variant='subtitle2'>
										For Regular Students
									</Typography>
									<ul>
										<li>
											<Typography variant='body2'>
												Must pass the written tests in English, and Math
												administered by the Guidance Office
											</Typography>
										</li>
										<li>
											<Typography variant='body2'>
												Must have safisfactory grades in conduct
											</Typography>
										</li>
										<li>
											<Typography variant='body2'>
												Must Submit Baptismal Certificate(if applicable)
											</Typography>
										</li>
										<li>
											<Typography variant='body2'>
												Must submit the latest form 138 or certificate of
												completion
											</Typography>
										</li>
										<li>
											<Typography variant='body2'>
												Must submit a certification of good moral character from
												the head of his/her previous school
											</Typography>
										</li>
									</ul>
									<Typography variant='subtitle2'>
										For Foreign Students
									</Typography>
									<ul>
										<li>
											<Typography variant='body2'>
												Must have original and photocopy of their Alien
												Certificate of Registration (ACR)
											</Typography>
										</li>
									</ul>
									<Typography variant='subtitle2'>
										Students from Foreign School
									</Typography>
									<ul>
										<li>
											<Typography variant='body2'>
												Must bring Certificate of Eligibility from the DepEd
											</Typography>
										</li>
									</ul>
								</div>
							</AccordionDetails>
						</Accordion>

						<Accordion defaultExpanded>
							<AccordionSummary expandIcon={<ExpandMore />}>
								<Typography>College</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<div>
									<Typography variant='subtitle2'>
										For Upcoming Freshmen
									</Typography>
									<ul>
										<li>
											<Typography variant='body2'>
												Form 138 from your previous High School (if already
												finished senior high school and not previously enrolled
												at any datamex branch)
											</Typography>
										</li>
										<li>
											<Typography variant='body2'>
												Good Moral Certification(if already finished senior high
												school and not previously enrolled at any datamex
												branch)
											</Typography>
										</li>
										<li>
											<Typography variant='body2'>
												Transcript of record or copy of grades for those whose
												finished their 2 year college at any datamex branch
											</Typography>
										</li>
									</ul>
									<Typography variant='subtitle2'>
										For Transfer Students
									</Typography>
									<ul>
										<li>
											<Typography variant='body2'>
												Transcript of record from their previous
												College/University
											</Typography>
										</li>
										<li>
											<Typography variant='body2'>
												Certificate of Dismissal also from their previous
												College/University
											</Typography>
										</li>
									</ul>
								</div>
							</AccordionDetails>
						</Accordion>
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

export default Requirements;
