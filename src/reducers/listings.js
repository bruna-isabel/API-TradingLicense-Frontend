export default (listings = [], action) => {
     switch(action.type) {
        case 'GET_LISTINGS':
            return listings;
        case 'GET_LISTINGS_ID':
            return listings;
        case 'CREATE_LISTINGS':
            return listings;
        case 'UPDATE_LISTINGS':
            return listings;
        case 'DELETE_LISTINGS':
            return listings;
        
        default:
            break;
     }
}