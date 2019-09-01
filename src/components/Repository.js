import React from 'react';
import { connect } from 'react-redux';
import { addRepository } from '../actions/repositories';
import { withStyles } from "@material-ui/core/styles";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(10),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  img: {
    width: 150,
    high: 150
  }
});


class Repository extends React.Component {

  componentDidMount() {
    fetch('https://api.github.com/repositories')
      .then(res => res.json())
      .then(repositories => repositories.map(repository => this.props.addRepository(repository)))
  }
  render() {
    const { classes, repositories } = this.props;
    console.log(repositories);
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>FullName</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repositories.map(repository => (
              <TableRow key={repository.id}>
                <TableCell component="th" scope="row"><img className={classes.img} src={repository.owner.avatar_url}/></TableCell>
                <TableCell>{repository.name}</TableCell>
                <TableCell>{repository.full_name}</TableCell>
                <TableCell>{repository.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,

})

const mapDispatchToProps = dispatch => ({
  addRepository: (repository) => {
    dispatch(addRepository(repository))
  },
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Repository))

