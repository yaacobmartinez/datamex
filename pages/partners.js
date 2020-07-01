import CustomAppBar from "../src/CustomAppBar";
import Navigation from "../src/Navigation";
import Footer from "../src/Footer";
import Head from "next/head";
function Partners() {
	return (
		<div>
			<Head>
				<title> Partners | Datamex College of Saint Adeline</title>
			</Head>
			<CustomAppBar />
			<Navigation value={0} />

			<Footer />
		</div>
	);
}

export default Partners;
