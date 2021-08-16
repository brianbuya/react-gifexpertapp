import React from 'react'

export const GifGridItem = ( { title, url } ) => {

    //console.log( id, title, url );
    // className para agregar clases a css

    return (
        <div className="card animate__animated animate__bounce">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}
