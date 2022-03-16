import { Button, FormControl, Input } from '@mui/material'
import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.childNodes[0].focus(); //el current devuelve el div que crea materialUI, por eso vamos a "childNodes[0]"
        console.log(inputRef.current.childNodes[0]);
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            
            <FormControl>
                <Input ref={inputRef} placeholder='Nombre' sx={{
                    mb: '50px'
                }}/>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={ handleClick }
                >
                    Focus
                </Button>
            </FormControl>

        </div>
    )
}
