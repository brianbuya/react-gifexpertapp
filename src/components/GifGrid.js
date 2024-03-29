// fetch API obtener imagenes
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );

    console.log(loading);

/*     const [images, setImages] = useState([]);

 */
    

    
    return (
        <>
            <h3 className="animate__animated animate__fadein"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }
       
            <div className="card-grid">

                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }

            </div> 
        </>
    )
}
