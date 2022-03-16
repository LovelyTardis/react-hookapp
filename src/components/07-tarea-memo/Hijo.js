import { Button } from '@mui/material';
import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <Button
            variant='contained'
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </Button>
    )
})
