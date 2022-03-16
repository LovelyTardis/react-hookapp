import React, { useEffect, useState } from 'react'
import { FormGroup, Input, TextField } from '@mui/material';
import {Message} from './Message'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    const { name, email } = formState;

    useEffect(() => {
        // console.log('name cambió');
    }, [name]);
    useEffect(() => {
        // console.log('email cambió');
    }, [email]);

    const handleInputChange = ({target}) => {
        // console.log(target.name);
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
    <>
        <h1>useEffect</h1>
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
        {(name === 'Albert') && <Message />}


    </>
  )
}