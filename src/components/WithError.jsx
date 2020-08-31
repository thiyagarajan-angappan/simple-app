import React from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles( theme => ({
    root: {
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: theme.spacing(3)
    }
}));

const withValidation = (WrappedInputComponent) => props => {

    const inputStyles = styles();

    console.log(props)

    return (
        <div className={inputStyles.root}>
            <WrappedInputComponent {...props} />
        </div>
    )
}

export default withValidation;