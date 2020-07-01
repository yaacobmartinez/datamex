import CustomAppBar from "../src/CustomAppBar";
import Navigation from "../src/Navigation";
import Footer from "../src/Footer";
import Head from "next/head";
function Facilities() {
	return (
		<div>
			<Head>
				<title>School Facilities | Datamex College of Saint Adeline</title>
			</Head>
			<CustomAppBar />
			<Navigation value={3} />

			<Footer />
		</div>
	);
}

export default Facilities;
