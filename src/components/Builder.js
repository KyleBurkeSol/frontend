import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

function createData(product, name, price) {
	return { product, name, price };
}

const rows = [
	createData('CPU', "AMD Ryzen 3700X", 300),
	createData('Graphics Card', "Nvidia RTX 2070 Super", 400),
	createData('Motherboard', "MSI B450 Tomahawk", 150)
];

export default class Builder extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const classes = makeStyles(theme => {});

		return (
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>Part</TableCell>
							<TableCell>Name</TableCell>
							<TableCell align="right">Price</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
						<TableRow key={row.product}>
							<TableCell component="th" scope="row">
								{row.product}
							</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell align="right">{row.price}</TableCell>
							<TableCell align="right">
								<IconButton aria-label="Delete" className={classes.margin}>
									<EditIcon fontSize="small" />
								</IconButton>
							</TableCell>
						</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}