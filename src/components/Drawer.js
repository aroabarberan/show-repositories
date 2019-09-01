import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
    color: '#fff',
    textDecoration: 'none'
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function Drawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar variant='dense'>
          <Typography variant='h6' color='inherit'>
            Repositories GitHub
          </Typography>
          <div className={classes.grow} />
          <Fragment>
            <MenuItem>
              <Link to='/repository/' className={classes.menuButton}>Repositories</Link>
            </MenuItem>
            <MenuItem>
              <Link to='/contact/' className={classes.menuButton}>Contact</Link>
            </MenuItem>
          </Fragment>
        </Toolbar>
      </AppBar>
    </div >
  );
}
