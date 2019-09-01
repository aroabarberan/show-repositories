import React from 'react';
import { Formik, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import {
  Divider, Button, DialogTitle, TextField,
  DialogActions, DialogContent, MenuItem,
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },

}));

function FormContact() {
  const classes = useStyles();
  return (
    <div>
      <Formik
        initialValues={{ name: '', message: '', info:'' }}
        onSubmit={(values, actions) => {
          values.info = "the form has been sent successfully";
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 500);
        }}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <DialogTitle id="form-dialog-title" style={{ marginTop: 50 }}>
              Contact Form</DialogTitle>
            <Divider />
            <DialogContent style={{ marginTop: 16, marginLeft: 32, marginRight: 32 }}>
              <Field
                name='name'
                render={({ field }) => (
                  <TextField
                    {...field}
                    autoFocus
                    margin="normal"
                    defaultValue="Name"
                    label={props.errors.name || 'Name'}
                    type="text"
                    variant='outlined'
                    fullWidth
                    error={!!props.errors.name}S
                  />
                )}
              />
              <Field
                name='message'
                render={({ field }) => (
                  <TextField
                    name='message'
                    {...field}
                    id="outlined-multiline-static"
                    label={props.errors.message || 'Message'}
                    multiline
                    rows="5"
                    defaultValue="Message"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />

            </DialogContent>
            <DialogActions>
              <Button type='submit' color="secondary" variant='contained'>
                Send
                  </Button>
            </DialogActions>
            {props.errors.name && <div id='feedback'>{props.errors.name}</div>}
          </form>
        )}
      />
    </div>
  )
}

export default FormContact;

