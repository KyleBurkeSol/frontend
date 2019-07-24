import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

export default function NavBar() {
	const classes = makeStyles(theme => {});
	const [anchorEl, setAnchorEl] = React.useState(null);

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	return (
		<AppBar position="static" color="default">
			<Toolbar>
				<Typography variant="h6" color="inherit">
					PC Part Picker
				</Typography>
					<Link to='/builder'>
						<Button className={classes.button}>Builder</Button>
					</Link>
					<Link to='/builds'>
						<Button className={classes.button}>Builds</Button>
					</Link>
					<Button className={classes.button}
						aria-controls="products-menu"
						aria-haspopup="true"
						onClick={handleClick}
					>
						Products
					</Button>
				<Menu
					id="products-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<Link to='/products/cpu'><MenuItem onClick={handleClose}>CPU</MenuItem></Link>
					<Link to='/products/graphics-card'><MenuItem onClick={handleClose}>Graphics Card</MenuItem></Link>
					<Link to='/products/motherboard'><MenuItem onClick={handleClose}>Motherboard</MenuItem></Link>
				</Menu>
			</Toolbar>
		</AppBar>
	);
}
