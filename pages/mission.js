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

const useStyles = makeStyles((theme) => ({
	root: { padding: theme.spacing(4, 1) },
}));
function Mission() {
	const classes = useStyles();
	return (
		<div>
			<Head>
				<title>Mission & Vision | Datamex College of Saint Adeline</title>
			</Head>
			<CustomAppBar />
			<Navigation value={3} />
			<Container maxWidth='md' className={classes.root}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={9} style={{ textAlign: "justify" }}>
						<Typography variant='h5'>Datamex History</Typography>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />
						<Typography variant='body2'>
							In 25 October 1978, former city council of makati and proprietor
							by name of Oscar M. Ibay the DATAMEX computer tutorial services.
							The first campus was established in Cartimar Shopping Center, Taft
							Avenue, Pasay City followed by its second campus as COBOL,
							Fortran, RPG, BASIC Language, Assemble Language and Pascal. The
							course leading to the Bachelor of Science in Computer Science and
							Two Associate in Computer Secretarial Course.
						</Typography>
						<br />
						<Typography variant='body2'>
							In response to the growing needs to Computer Education, DATAMEX a
							non-sectarian and stock educational institution was incorporated
							and registered in 1984 under the trade name of DATAMEX Computer
							School and was advertently elevated to DATAMEX Computer College
							1993.
						</Typography>
						<br />
						<Typography variant='body2'>
							Having earned recognition from the Commission on Higher Education
							(CHED) and Technical Education and Skills Development, DATAMEX
							Institute of Computer Technology offers an undergraduate degree
							course in computer science as well as vocational-technical
							computer courses as Two-year Integreted Computer Programming,
							Two-year Integrated Hardware Servicing and two years integrated
							Information Management.
						</Typography>
						<br />
						<Typography variant='body2'>
							With an increasing demands for computer literacy to fill the needs
							of technology advancement, DATAMEX further sought an approval of
							CHED and TESDA to offer additional courses such as Two-year
							Integrated Hotel and Restaurant Management, Two-year Integrated
							Health Care Service, Two-year Integrated Computer Animation,
							Three-year ladderized other short courses like Caregiver, Call
							Center, etc that are expected to gain full recognitaion.
						</Typography>
						<br />
						<Typography variant='body2'>
							For the past two decades, DATAMEX, a 100% Filipino owned Computer
							School succesful operating in the Philippine takes pride in its
							relentless effort for academic excellence. With the governement's
							accelerated economic recovery program, the demand for trained and
							skilled personnel was greater that ever.
						</Typography>
						<br />
						<br />
						<Typography variant='h5'>Philosophy</Typography>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />
						<Typography variant='body2'>
							DATAMEX-COLLEGE OF ST. ADELINE, INC aims to realize the national
							ideas and culture of the Filipino virtues, and human values. In
							effect the school instills in the students appreciation of the
							positive outlook in like, respect for the national tradition and
							heritage, and level of mankind.
						</Typography>
						<br />
						<Typography variant='body2'>
							Our aim is well-integrated development fo person's potentials in
							mind, soul and body the spiritual capabilities. The school creates
							a setting where each student is guided ti develop good moral
							values and deep sense of responsibility need for his/her present
							as well as his/her future personal life.
						</Typography>
						<br />
						<Typography variant='body2'>
							Through the many different programs of the school adopted to the
							needs of the students, the school strives to contribute in its own
							way, to the realization fo the educational mission.
						</Typography>
						<br />
						<br />
						<Typography variant='h5'>Mission</Typography>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />
						<Typography style={{ fontStyle: "italic" }} variant='subtitle1'>
							To provide quality education to its students through well-trained
							mentor focused staff enabled by reliable college facilities and
							efficient processes anchored on the values of integrity,
							innovation and level of excellence.
						</Typography>
						<br />
						<Typography variant='h5'>Vision</Typography>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />
						<Typography style={{ fontStyle: "italic" }} variant='subtitle1'>
							By 2020 we will be the preferred college center of excellence in
							the Philippines providing personalized and compassionate
							instruction of the highest standard.
						</Typography>
						<br />
						<Typography variant='h5'>Datamex Hymn</Typography>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />
						<Typography style={{ fontStyle: "italic" }}>
							DATAMEX Computer College
						</Typography>
						<Typography style={{ fontStyle: "italic" }}>
							Our Alma matter we are one
						</Typography>
						<Typography style={{ fontStyle: "italic" }}>
							We glorify thy name
						</Typography>
						<Typography style={{ fontStyle: "italic" }}>
							We sing to you our praises
						</Typography>
						<Typography style={{ fontStyle: "italic" }}>
							DATAMEX Computer College
						</Typography>
						<Typography style={{ fontStyle: "italic" }}>
							We thank you for the goals
						</Typography>
						<Typography style={{ fontStyle: "italic" }}>
							We have fulfilled
						</Typography>
						<Typography style={{ fontStyle: "italic" }}>
							And for what we are today
						</Typography>
						<Typography style={{ fontStyle: "italic" }}>
							DATAMEX forever
						</Typography>
						<br />
						<Typography style={{ fontStyle: "italic" }}>
							We always want to be with you
						</Typography>
						<Typography style={{ fontStyle: "italic" }}>
							To be always be together
						</Typography>
						<Typography style={{ fontStyle: "italic" }}>
							The knowledge that you gave us
						</Typography>
						<Typography style={{ fontStyle: "italic" }}>
							Will be marked in history
						</Typography>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}

export default Mission;
