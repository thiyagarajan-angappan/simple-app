import React from 'react';
import { Container } from '@material-ui/core';

const SAContainer = ({ children }) => {
    return (
        <Container
            maxWidth="xl">
            {children}
        </Container>
    );
}

export default SAContainer;