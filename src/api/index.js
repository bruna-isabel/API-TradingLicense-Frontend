import axios from 'axios';

const url = "http://localhost:3000/listings";

const getListings = () => axios.get( url );