import CustomAppBar from "../src/CustomAppBar";
import Navigation from "../src/Navigation";
import Footer from "../src/Footer";
import Head from "next/head";
import {
	Container,
	Typography,
	Divider,
	makeStyles,
	Grid,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
	Button,
	FormHelperText,
	Backdrop,
	CircularProgress,
} from "@material-ui/core";
import LatestNews from "../src/LatestNews";
import Link from "../src/Link";
import Router from "next/router";
const useStyles = makeStyles((theme) => ({
	root: { padding: theme.spacing(4, 1) },
	form: { padding: theme.spacing(2, 0) },
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: "#fff",
	},
}));
function Registration() {
	const classes = useStyles();
	const initialValues = {
		branch: "",
		program: "",
		name: "",
		address: "",
		contact: "",
		email: "",
		dateOfBirth: "",
		gender: "",
	};
	const initialError = {
		branch: "",
		program: "",
		name: "",
		address: "",
		dateOfBirth: "",
		gender: "",
	};
	const [values, setValues] = React.useState(initialValues);
	const [errors, setErrors] = React.useState(initialError);
	const handleChange = (e) => {
		setErrors({ ...errors, [e.target.name]: "" });
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	const validate = () => {
		let errs = {};
		if (!values.branch) {
			errs.branch = "Branch is required";
		}
		if (!values.program) {
			errs.program = "Program is required";
		}
		if (!values.name) {
			errs.name = "Name is required";
		}
		if (!values.address) {
			errs.address = "Address is required";
		}
		if (!values.dateOfBirth) {
			errs.dateOfBirth = "Date of Birth is required";
		}
		if (!values.gender) {
			errs.gender = "Gender is required";
		}

		return errs;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const errs = validate();
		if (Object.keys(errs).length > 0) {
			return setErrors(errs);
		}
		setLoading(true);

		const add = async () => {
			const res = await fetch(`${process.env.SPREADSHEET_API}`, {
				method: "POST",
				mode: "no-cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});
			Router.push("/success");
		};
		add();
	};

	const [loading, setLoading] = React.useState(false);
	return (
		<div>
			<Head>
				<title>Registration | Datamex College of Saint Adeline</title>
			</Head>
			<Backdrop open={loading} className={classes.backdrop}>
				<CircularProgress color='inherit' />
			</Backdrop>
			<CustomAppBar />
			<Navigation value={1} />
			<Container maxWidth='md' className={classes.root}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={9}>
						<Typography variant='h5'>
							Student Online Reservation Form
						</Typography>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />
						<Typography variant='body2'>
							This form collects initial information that will serve as the key
							for admission reservation to the school.
						</Typography>
						<div className={classes.form}>
							<Typography variant='h6' gutterBottom>
								Which Campus would you like to enrol?
							</Typography>
							<Grid
								container
								spacing={2}
								component='form'
								onSubmit={handleSubmit}>
								<Grid item xs={12}>
									<FormControl fullWidth variant='outlined'>
										<InputLabel>Branch Reference*</InputLabel>
										<Select
											error={Boolean(errors.branch)}
											value={values.branch}
											onChange={handleChange}
											name='branch'
											label='Branch Reference*'>
											<MenuItem value=''>
												<em>None</em>
											</MenuItem>
											<MenuItem value='Fairview'>Fairview</MenuItem>
											<MenuItem value='Valuenzuela'>Valuenzuela</MenuItem>
											<MenuItem value='Meycauayan'>Meycauayan</MenuItem>
										</Select>
										{errors.branch && (
											<FormHelperText error>{errors.branch}</FormHelperText>
										)}
									</FormControl>
								</Grid>
								<Grid item xs={12}>
									<FormControl fullWidth variant='outlined'>
										<InputLabel>Program*</InputLabel>
										<Select
											error={Boolean(errors.program)}
											value={values.program}
											onChange={handleChange}
											name='program'
											label='Program*'>
											<MenuItem value=''>
												<em>None</em>
											</MenuItem>
											<MenuItem value='Senior High School'>
												Senior High School
											</MenuItem>
											<MenuItem value='College'>College</MenuItem>
										</Select>
										{errors.program && (
											<FormHelperText error>{errors.program}</FormHelperText>
										)}
									</FormControl>
								</Grid>
								<Grid item xs={12}>
									<Typography variant='h6' gutterBottom>
										Applicant Information
									</Typography>
								</Grid>

								<Grid item xs={12}>
									<TextField
										error={Boolean(errors.name)}
										helperText={errors.name && errors.name}
										fullWidth
										label='Name*'
										value={values.name}
										name='name'
										onChange={handleChange}
										variant='outlined'
										placeholder='e.g. Juan Dela Cruz'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										error={Boolean(errors.address)}
										helperText={errors.address && errors.address}
										fullWidth
										label='Address*'
										value={values.address}
										name='address'
										onChange={handleChange}
										variant='outlined'
										placeholder='House # or Lot Blk / Street / Brgy or Subdivision / City'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label='Contact No.'
										value={values.contact}
										name='contact'
										onChange={handleChange}
										variant='outlined'
										placeholder='09** *** ****'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label='Email'
										value={values.email}
										name='email'
										onChange={handleChange}
										variant='outlined'
										placeholder='e.g juandelacruz@gmail.com'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										error={Boolean(errors.dateOfBirth)}
										helperText={errors.dateOfBirth && errors.dateOfBirth}
										fullWidth
										variant='outlined'
										label='Date of Birth*'
										name='dateOfBirth'
										type='date'
										onChange={handleChange}
										value={values.dateOfBirth}
										InputLabelProps={{
											shrink: true,
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<FormControl fullWidth variant='outlined'>
										<InputLabel>Gender*</InputLabel>
										<Select
											error={Boolean(errors.gender)}
											value={values.gender}
											onChange={handleChange}
											name='gender'
											label='Gender*'>
											<MenuItem value=''>
												<em></em>
											</MenuItem>
											<MenuItem value='Male'>Male</MenuItem>
											<MenuItem value='Female'>Female</MenuItem>
											<MenuItem value='Prefer not to disclose'>
												Prefer not to disclose
											</MenuItem>
										</Select>
										{errors.gender && (
											<FormHelperText error>{errors.gender}</FormHelperText>
										)}
									</FormControl>
								</Grid>
								<Grid item xs={12}>
									<Typography variant='caption'>
										Note: Informations indicated with (*) are important and
										required to complete this registration.
									</Typography>
									<br />
									<Typography variant='caption'>
										By clicking on the submit button you agree to the terms of
										the
										<Link href='#'> DCSA Customer Agreement</Link>
									</Typography>
								</Grid>
								<Grid item xs={12} style={{ textAlign: "right" }}>
									<Button
										type='submit'
										onClick={handleSubmit}
										variant='contained'
										color='secondary'
										size='large'>
										Start your Journey Now!
									</Button>
								</Grid>
							</Grid>
						</div>
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

export default Registration;
