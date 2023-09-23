import axios from "axios";
export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : 'efcc3d3da008499bbd69e1f91a1bff73'
    }
})