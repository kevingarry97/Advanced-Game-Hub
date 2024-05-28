import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next?: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a34162c008a9430ea11a3d82d28e9400",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config?: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(config ? this.endpoint : this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
  }

  getCustom = () => {
    return axiosInstance.get<T>(this.endpoint)
  }
}

export default APIClient;