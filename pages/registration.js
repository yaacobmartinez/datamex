import CustomAppBar from "../src/CustomAppBar";
import Navigation from "../src/Navigation";
import Footer from "../src/Footer";
import Head from "next/head";
function Registration() {
	return (
		<div>
			<Head>
				<title>Registration | Datamex College of Saint Adeline</title>
			</Head>
			<CustomAppBar />
			<Navigation value={1} />

			<Footer />
		</div>
	);
}

export default Registration;
