import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a34162c008a9430ea11a3d82d28e9400'
    }
})