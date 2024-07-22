import axios from 'axios';

const API_URL = 'https://newsapi.org/v2/'; // Update with your base URL

const getApiCall = async () => {
    try {
        const response = await axios.get(API_URL + 'top-headlines?country=in&apiKey=3db839b8394947a287b21ec8aaa6ab98');
        return response.data; // Return the data field from the response
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message); // Extract and throw the error message
        } else {
            throw new Error('An unknown error occurred'); // Handle cases where the error is not an instance of Error
        }
    }
};

export { getApiCall };