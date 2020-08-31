import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const customTheme = createMuiTheme({
    palette:{
        background: {
            default: 'red'
        },
        primary: {
            main: '#533186'
        },
        secondary: {
            main: '#648631'
        }
    },
    overrides:{
        MuiButton:{
            fullWidth: '60%'
        },
        palette: {
            background: {
                default: 'red'
            }
        }
    }
});

const SAThemeContainer = ({ children }) => {
    
    return (
        <MuiThemeProvider theme={customTheme}>
            {children}
        </MuiThemeProvider>
    )
}

export default SAThemeContainer;