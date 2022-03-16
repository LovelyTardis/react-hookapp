import { Button } from '@mui/material';
import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import {useCounter} from '../../hooks/useCounter'

export const MemoHook = () => {
    
    const {counter, increment} = useCounter(2000);
    const [show, setShow] = useState(true);
    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />

            <p>{memoProcesoPesado}</p>

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