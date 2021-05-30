import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tinder-backend---mern.herokuapp.com',
})

export default instance;