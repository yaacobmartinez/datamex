import React from "react";
import { Typography, Divider } from "@material-ui/core";

function Facebook() {
	return (
		<div>
			<Typography variant='body1'>Our Facebook Page</Typography>
			<Divider style={{ marginTop: 20, marginBottom: 20 }} />
			<div
				className='fb-page'
				data-href='https://www.facebook.com/DatamexOfficial2016/'
				data-tabs='timeline'
				data-width=''
				data-height=''
				data-small-header='false'
				data-adapt-container-width='true'
				data-hide-cover='false'
				data-show-facepile='true'>
				<blockquote
					cite='https://www.facebook.com/DatamexOfficial2016/'
					className='fb-xfbml-parse-ignore'>
					<a href='https://www.facebook.com/DatamexOfficial2016/'>
						Datamex College of Saint Adeline
					</a>
				</blockquote>
			</div>
		</div>
	);
}

export default Facebook;
