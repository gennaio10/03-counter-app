
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value = 0 } ) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = () => setCounter(counter + 1);

    const handleSubtract = () => setCounter(counter - 1);

    const handleReset = () => {
        setCounter(value);
    };

    const handleTestClick = (e) => {
        console.log(e);
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2 id="valorcontador">{ counter }</h2>
            <button id="btnadd" onClick={ handleAdd }>+1</button>
            <button id="btnreset" onClick={ handleReset }>Reset</button>
            <button id="btnsub" onClick={ handleSubtract }>-1</button>
            <br></br>
            <button onClick={ handleTestClick }>Click Event, paso de e por default</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number,
};

export default CounterApp;
