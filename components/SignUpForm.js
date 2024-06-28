import React, { useCallback, useReducer } from 'react';
import { Inputs } from '../components/Inputs';
import { SubmitButton } from '../components/SubmitButton';
import { Feather } from '@expo/vector-icons';
import { validateInput } from '../utils/actions/formAction';
import { reducer } from '../utils/reducers/formReducer';
import { signUp } from '../utils/actions/authActions';

export const SignUpForm = (props) => {
  const initialState = {
    inputValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },

    inputValidities: {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    },
    formIsValid: false,
  };

  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);

      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  const authHandler = () => {
    signUp(
      formState.inputValues.firstName,
      formState.inputValues.lastName,
      formState.inputValues.email,
      formState.inputValues.password
    );
  };

  return (
    <>
      <Inputs
        id='firstName'
        label='First Name'
        icon='user'
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities['firstName']}
      />
      <Inputs
        id='lastName'
        label='Last Name'
        icon='user'
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities['lastName']}
      />
      <Inputs
        id='email'
        label='Email'
        icon='mail'
        iconPack={Feather}
        keyboardType='email-address'
        autoCapitalize='none'
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
        title='Sign Up'
        style={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
        onPress={authHandler}
      />
    </>
  );
};
