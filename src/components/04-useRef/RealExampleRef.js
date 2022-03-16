import { Button } from '@mui/material';
import React, { useState } from 'react'
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);
    const toggleEvent = () => {
        setShow(!show);
    }
    return (
    <div>
        <h1>RealExampleRef</h1>
        <Button variant='contained' onClick={toggleEvent}>Toggle</Button>
        { show && <MultipleCustomHooks />}

    </div>
  )
}
