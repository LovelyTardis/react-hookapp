import React from 'react'
import { Button, FormGroup, TextField } from '@mui/material';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
    <form onSubmit={ handleSubmit }>
        <h1>FormWithCustomHook</h1>
        <hr />
        <FormGroup>
            <TextField
                type='text'
                name='name'
                className='form-control'
                placeholder='Tu nombre'
                autoComplete='off'
                value={ name }
                onChange={handleInputChange}
            />
        </FormGroup>
        <FormGroup>
            <TextField
                type='text'
                name='email'
                className='form-control'
                placeholder='nombre@gmail.com'
                autoComplete='off'
                value={ email }
                onChange={handleInputChange}
            />
        </FormGroup>
        <FormGroup>
            <TextField
                type='password'
                name='password'
                className='form-control'
                placeholder='*******'
                value={ password }
                onChange={handleInputChange}
            />
        </FormGroup>
        <Button type='submit' variant='contained'>Submit Changes</Button>
    </form>
  )
}