//rafc funcional component
//en caso de no usar ninguna clase usar frament <> <>
// en caso de usar solo un form no es necesario usar fragments para retornar elementos agrupados.
import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setinputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        //prevenir el refresh del submit
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats ] );
            setinputValue('');

        }
        
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
