import axios, { AxiosResponse, AxiosRequestConfig} from "axios";

export const getMovie = (id: number): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
        method: 'GET',
        url: `https://api.tvmaze.com/shows/${id}`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
      };
    return axios.request(options);
}