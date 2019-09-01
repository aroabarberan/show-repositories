import React from 'react';
import { connect } from 'react-redux';
import { addRepositories } from '../actions/repositories';
import {
  Table, TableBody, TableCell, TableHead, TableRow, Paper
} from '@material-ui/core/';

const url = 'https://api.github.com/repositories';


class Repository extends React.Component {

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(repositories => this.props.addRepositories(repositories))
  }

  render() {
    const { repositories } = this.props;
    return (
      <Paper style={{ width: '100%', marginTop: 60, overflowX: 'auto' }}>
        <Table style={{ minWidth: 650 }}>
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
                <TableCell component="th" scope="row">
                  <img style={{ width: 150, high: 150 }}
                    src={repository.owner.avatar_url}
                    alt="" />
                </TableCell>
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
  addRepositories: (repositories) => {
    dispatch(addRepositories(repositories))
  },
})


export default connect(mapStateToProps, mapDispatchToProps)(Repository);



