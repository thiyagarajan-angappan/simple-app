import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const SAInputStyles = makeStyles(theme => ({
    root: {
        marginRight: theme.spacing(3)
    }
}));

const SAInput = ({ label, type, validate }) => {

    const styles = SAInputStyles();
    const [invalid, setInvalid] = useState(false);

    const handleBlur = e=> {
        setInvalid(validate(e));
    }
    
    const errorMsg = () => {
        return <Alert severity="error">{`${invalid}`}</Alert>
    }

    return (
        <React.Fragment>
            <TextField 
                type={type === 'password' ? type : 'text'}
                label={label} 
                onBlur={e => handleBlur(e)}
                variant="filled" 
                className={styles.root}/>
            {
                invalid ?  errorMsg() : null
            }
        </React.Fragment>
    )
}

export default SAInput;