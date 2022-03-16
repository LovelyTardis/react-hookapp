import { Button } from '@mui/material'
import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    console.log('otra vez')
  return (
    <Button onClick={ () => {
        increment(5);
    }}>
        Incrementar
    </Button>
  )
})
