import React from 'react'; import { useParams } from 'react-router-dom';

function Application(props) { 
    let { id } = useParams(); 
    return ( 
        <> 
        <h1>Application ID: {id}</h1> 
        <p>each application </p> 
        </> 
    ); 
}

export default Application;