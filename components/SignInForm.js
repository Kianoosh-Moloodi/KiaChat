import React, { useCallback, useReducer } from 'react';
import { Inputs } from '../components/Inputs';
import { SubmitButton } from '../components/SubmitButton';
import { Feather } from '@expo/vector-icons';
import { validateInput } from '../utils/actions/formAction';
import { reducer } from '../utils/reducers/formReducer';

const initialState = {
  inputValues: {
    email: '',
    password: '',
  },
  inputValidities: {
    email: false,
    password: false,
  },
  formIsValid: false,
};

export const SignInForm = () => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);

      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );
  return (
    <>
      <Inputs
        id='email'
        label='Email'
        icon='mail'
        iconPack={Feather}
        autoCapitalize='none'
        keyboardType='email-address'
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities['email']}
      />
      <Inputs
        id='password'
        label='Password'
        icon='lock'
        iconPack={Feather}
        autoCapitalize='none'
        secureTextEntry
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities['password']}
      />
      <SubmitButton
        title='Sign In'
        style={{ marginTop: 40 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};
