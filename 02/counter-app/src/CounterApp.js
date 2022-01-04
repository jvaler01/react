import React, { useState } from "react";
import PropTypes from "prop-types";

// FC
const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState( value ); //useState es una funcion que retorna un array con dos valores

    const handleAdd = (e) => {
        setCounter( counter + 1);
        // setCounter( (c) => c +1 );
    }

    const handleSubtract = (e) => {
        setCounter( counter - 1);
    }

    const handleReset = (e) => {
        setCounter( value );
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>

            <button onClick={ (e) => { handleAdd(e) } }>+1</button>
            {/* Se puede dejar como referencia y se simplifica el codigo.
            Cuidado con poner parentesis en la función, porque se va a ejecutar. */}
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;