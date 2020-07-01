import CustomAppBar from "../src/CustomAppBar";
import Navigation from "../src/Navigation";
import {
	Container,
	Grid,
	Typography,
	makeStyles,
	Divider,
	Button,
} from "@material-ui/core";
import Link from "../src/Link";
import Footer from "../src/Footer";
import { Fade } from "react-slideshow-image";
import { ArrowForward } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
	content: { padding: theme.spacing(4, 0) },
	contentImage: {
		float: "left",
		height: 200,
		margin: theme.spacing(0, 2, 2, 0),
		[theme.breakpoints.down("xs")]: {
			width: "95vw",
			height: "auto",
			margin: theme.spacing(0, 0, 2, 0),
		},
	},
	section: {
		margin: theme.spacing(2, 0),
	},
	sliderImage: {
		height: "85vh",
		width: "100%",
		objectFit: "cover",
		opacity: "0.5",
	},
	slide: {
		height: "82vh",
		width: "100%",
	},
	slideContainer: {
		height: "80vh",
		width: "100%",
		"& .MuiLink-underlineHover:hover": {
			textDecoration: "none",
		},
	},
	heroTextHolder: {
		display: "flex",
		flexDirection: "column",
		position: "absolute",
		textAlign: "center",
		alignItems: "center",
		width: "100%",
		top: 200,
		[theme.breakpoints.down("sm")]: {
			top: 150,
			padding: theme.spacing(0, 1),
		},
	},
	heroTitle: {
		fontSize: 40,
		fontWeight: 700,
		fontFamily: "Poppins",
		textTransform: "uppercase",
		[theme.breakpoints.down("xs")]: {
			fontSize: 30,
		},
	},
	heroContent: {
		fontFamily: "Poppins",
		textTransform: "uppercase",
		[theme.breakpoints.down("xs")]: {
			fontSize: 13,
		},
	},
	btn: {
		width: 250,
		borderRadius: 20,
		margin: theme.spacing(2, 0),
	},
}));
const slideImages = [
	{
		image: "/images/slider/1.jpg",
		title: "Solve the challenges of tomorrow",
		content:
			"With technology, administration and management degree programs impart with technology",
	},
	{
		image: "/images/slider/2.jpg",
		title: "EARN THE NEWEST CERTIFICATION IN TECHNOLOGY",
		content: "from a college with innovation at its core",
	},
	{
		image: "/images/slider/3.jpg",
		title: "INNOVATIVE DEGREE FOR AN EVOLVING BUSINESS WORLD",
		content: "",
	},
];

const fadeProperties = {
	duration: 5000,
	transitionDuration: 1000,
	infinite: true,
	pauseOnHover: true,
};
export default function Home() {
	const classes = useStyles();
	return (
		<div>
			<CustomAppBar />
			<Navigation value={0} />
			<div className={classes.slideContainer}>
				<Fade {...fadeProperties}>
					{slideImages.map((_) => (
						<div className={classes.slide} key={_.image}>
							<div className='image-container'>
								<img
									src={_.image}
									alt={_.image}
									className={classes.sliderImage}
								/>
							</div>
							<div className={classes.heroTextHolder}>
								<div style={{ height: 150 }}>
									<Typography className={classes.heroTitle}>
										{_.title}
									</Typography>
									<Typography className={classes.heroContent} variant='h6'>
										{_.content}
									</Typography>
								</div>
								<Button
									variant='contained'
									color='secondary'
									size='large'
									className={classes.btn}
									component={Link}
									href='/registration'
									endIcon={<ArrowForward />}>
									Apply Online Now
								</Button>
							</div>
						</div>
					))}
				</Fade>
			</div>
			<Container maxWidth='md'>
				<Grid
					container
					spacing={2}
					direction='row-reverse'
					className={classes.content}>
					<Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
						<img
							src='/images/poster.jpg'
							alt='poster'
							style={{ height: 450, borderRadius: 15 }}
						/>
					</Grid>
					<Grid item xs={12} sm={8}>
						{/* Articles */}
						<div className={classes.section}>
							<Typography variant='h5'>
								GET A CHANCE TO BE CERTIFIED BY MICROSOFT
							</Typography>
							<br />
							<Divider />
							<br />
							<Typography variant='body2' style={{ textAlign: "justify" }}>
								<img
									src='/images/microsoft.jpg'
									alt='microsoft'
									className={classes.contentImage}
								/>
								At this current generation, you probably heard about the
								Microsoft, a company provide desktop application tools and
								desktop graphical operating system for desktop computers and
								laptop computers. Microsoft is also a leading company that
								provides not only programs but also training to individuals who
								wants to enhance their skills in computer operation and other
								computer skills by the use of Microsoft applications. In this
								process Microsoft provides a chance and a privilege to every
								individuals to obtain certifications that recognize by them and
								by other companies world wide. At DATAMEX-College of St.
								Adeline, we believe its critically important to have Microsoft
								certifications to help today's individuals to be more competent
								and achieve international standards in computer skills. That is
								why we've put technology at the centre of everything we do
								through unique teaching approaches and integrating technology in
								our different programs. As the Microsoft Partner,
								DATAMEX-College of St. Adeline are proud to offer a chance for
								every students to gain Microsoft Certification and help our
								students stand out with rightful skills employers are searching
								for to help move their business forward their goals.
							</Typography>
						</div>

						<div className={classes.section}>
							<Typography variant='h5'>
								WALK-IN AND ONLINE RESERVATION
							</Typography>
							<br />
							<Divider />
							<br />
							<Typography variant='body2' style={{ textAlign: "justify" }}>
								You can visit us at our main branch in 85 Commonwealth Ave. East
								Park Subd. Fairview, Quezon City for your onsite or walk-in
								reservation or you can call us at (02)9218350 and also you can
								go through our online reservation by clicking the above apply
								online or <Link href='/registration'>click here</Link>, And in
								addition you can <Link href='/contact'>click here</Link> for the
								other branches near in your place.
							</Typography>
						</div>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}
