import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const Layout = () => {

    const {counter, increment} = useCounter(1);


    const { data  } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect( () => {
        setBoxSize(pTag.current.getBoundingClientRect());
        console.table(pTag.current.getBoundingClientRect());
    }, [quote]);


    return (
        <div>
            <h1>Layout</h1>
            <hr />
            <blockquote style={{
                display: 'flex'
            }}>
                <p ref={pTag}>{quote}</p>
            </blockquote>
            <pre>{ boxSize.width }</pre>
            <button onClick={increment}>Siguiente quote</button>
        </div>
    )
}