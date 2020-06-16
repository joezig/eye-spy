import React from 'react';

import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

import Input from '../../shared/components/form-elements/input';
import './new-place.css';

const NewPlace = () => {
  return (
    <form className='place-form'>
      <Input
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title...'
      />
    </form>
  );
};

export default NewPlace;
