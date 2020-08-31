import React from 'react';
import withErrorComponent from './WithError';
import { passwordValidator } from '../components/validator';
import SAInput from './SAInput';

const passwordInput = () => <SAInput label="Password" validate={e => passwordValidator(e.target.value)}/>

export default withErrorComponent(passwordInput);