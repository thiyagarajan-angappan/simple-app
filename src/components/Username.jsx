import React from 'react';
import withErrorComponent from './WithError';
import { userNameValidator } from '../components/validator';
import SAInput from './SAInput';

const userNameInput = () => <SAInput label="Username" validate={e => userNameValidator(e.target.value)}/>

export default withErrorComponent(userNameInput);