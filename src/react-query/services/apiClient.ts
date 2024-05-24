import axios from 'axios';
import { PostQuery } from '../hooks/usePosts';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance
      .get<T[]>(this.endpoint)
      .then((res) => res.data);
  }

  getById = (id: number | undefined, pageParam: number, query: PostQuery) => {
    return axiosInstance
      .get<T[]>(this.endpoint, {params: {id, _start: (pageParam - 1) * query?.pageSize, _limit: query.pageSize}})
      .then((res) => res.data);
  }

  post = (data: T) => {
    return axiosInstance
      .post<T>(this.endpoint, data)
      .then(res => res.data);
  }
}

export default APIClient;