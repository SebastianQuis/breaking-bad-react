import React, { useEffect, useState } from 'react'

export const CounterApp = ( ) => {
    const [quote, setQuote ] = useState('');
    const [author, setAuthor ] = useState('');

    const getBreakingBad = async () => {
        const res = await fetch( 'https://api.breakingbadquotes.xyz/v1/quotes' );
        const dataJSON = await res.json();
        setQuote( dataJSON[0].quote );
        setAuthor( dataJSON[0].author );
    }

    useEffect( () => {
        getBreakingBad();
    }, []);

    
    return (
        <>
            <h1>Breaking bad</h1>
            <h3>author: { author } </h3>
            <p>quote: { quote } </p>
            <button onClick={ getBreakingBad }>Cambiar</button>
        </>
    );
  
}
