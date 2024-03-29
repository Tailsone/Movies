import axios, { AxiosResponse, AxiosRequestConfig} from "axios";

export const getMovies = (req: string): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
        method: 'GET',
        url: `https://api.tvmaze.com/search/shows?q=${req}`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
      };
    return axios.request(options);
}