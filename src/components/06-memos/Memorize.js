import { Button } from '@mui/material';
import React, { useState } from 'react'
import {useCounter} from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {
    
    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);
    
    return (
        <div>
            <h1>Counter: <Small value={counter}/></h1>
            <hr />

            <Button variant='contained' onClick={increment}>+1</Button>
            <Button
                variant='contained'
                onClick={ () => {
                    setShow( !show );
                }}
            >Toggle { JSON.stringify(show) }</Button>



        </div>
    )
}