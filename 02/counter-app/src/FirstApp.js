import React from "react";
import PropTypes from "prop-types";
// import React, { Fragment } from "react";

// FC
const FirstApp = ( {someprop = 'default', anotherprop, anotherprop2} ) => {


    const greeter = 'Hellow World';
    const integer = 123;
    const double = 12.32;
    const boolean = false;
    const array = [1,2,3,4,5,6];
    const object = {
        name: 'Daxter',
        color: 'Orange'
    }

    return (
        <>
            <h1>Variables</h1>
            <p>String: { greeter }</p>
            <p>Integer: { integer }</p>
            <p>Double: { double }</p>
            <p>Boolean: { boolean }</p>
            <p>Array: { array }</p>
            <p>Object: { JSON.stringify(object) }</p>
            <p>Props: { someprop }</p>
            <p>My first application</p>
        </>
    );
}
FirstApp.propTypes = {
    someprop: PropTypes.string,
    anotherprop: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
    anotherprop2: ''
}
export default FirstApp;