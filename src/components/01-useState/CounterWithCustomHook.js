import React from 'react'
import { Button } from '@mui/material'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);
  return (
    <>
        <h1>Counter with Hook: {state}</h1>
        <hr />

        <Button variant='contained'onClick={() => increment(2)}>
          +
        </Button>
        <Button variant='contained'onClick={reset}>
          RESET
        </Button>
        <Button variant='contained' onClick={() => decrement(5)}>
          -
        </Button>
    </>
  )
}
