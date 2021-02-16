import React from 'react';
import CorebizContext from './CorebizContext';
import useFetch from '../hooks/useFetch';

const CorebizState = ({children}) => {

    const [ data, loading ] = useFetch(`https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products`);
    return (
        <CorebizContext.Provider
            value={{
                data, //resultado de la busqueda 
                loading, //hay data? true/false
            }}
        >
            {children}
        </CorebizContext.Provider>
    )
}

export default CorebizState
