import React from 'react'

export const Small = React.memo(({value}) => {
    console.log("otra vez");
    return (
        <small>{value}</small>
    )
});