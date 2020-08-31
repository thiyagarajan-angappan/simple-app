import React from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';
import SAButton from '../components/SAButton';
import UserNameComponent from '../components/Username';
import PasswordComponent from '../components/Password';

let credentials = require('../assets/credentials.json');

const formStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        minHeight: '60vh'
    },
    paper: {
        padding: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

const LoginPage = () => {

    const styles = formStyles();
    
    return (
        <Grid container 
            justify="center" 
            alignContent="space-around" 
            className={styles.root}
        >
            <Grid item 
                xs={9}
            >
                <Paper elevation={3}
                    className={styles.paper}
                >
                    <UserNameComponent />
                    <PasswordComponent />
                    <SAButton />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default LoginPage;