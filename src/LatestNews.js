import { Typography, Divider, makeStyles } from "@material-ui/core";
import { news } from "./data";

const useStyles = makeStyles((theme) => ({
	news: {
		padding: theme.spacing(2, 1),
		display: "flex",
	},
}));
function LatestNews() {
	const classes = useStyles();
	return (
		<div>
			<Typography variant='subtitle2' color='textSecondary'>
				Latest News
			</Typography>
			<Divider style={{ marginTop: 20 }} />
			{news.map((_) => (
				<div className={classes.news} key={_.thumbnail}>
					<img
						src={_.thumbnail}
						alt={_.title}
						style={{ width: 100, marginRight: 20 }}
					/>
					<Typography variant='caption'>{_.title}</Typography>
				</div>
			))}
		</div>
	);
}

export default LatestNews;
