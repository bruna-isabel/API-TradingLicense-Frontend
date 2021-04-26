import React from 'react';
import Listing from './Listing/Listing';
import styles from './styles'; 

const Listings = () => {
    const classes = styles();
    return (
        <>
        <h1>Listings</h1>
        <Listing />
        <Listing />
        </>
    ); 
};

export default Listings;