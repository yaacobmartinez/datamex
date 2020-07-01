import { Typography, Divider } from "@material-ui/core";

function LatestNews() {
	return (
		<div>
			<Typography variant='subtitle2' color='textSecondary'>
				Latest News
			</Typography>
			<Divider style={{ marginTop: 20 }} />
		</div>
	);
}

export default LatestNews;
