import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";

export const fetchGet = async (url: string, headers?: Record<string, string>) =>
   await axios.get(`${BASE_URL}${url}`, { headers }).then((res) => res.data);

export const fetchPost = async (
   url: string,
   headers?: Record<string, string>,
   data?: any
) =>
   await axios
      .post(`${BASE_URL}${url}`, data, { headers })
      .then((res) => res.data);

export const useGet = async (url: string, headers?: Record<string, string>) => {
   const data = await fetchGet(url, headers);
   return data;
};

export const usePost = async (
   url: string,
   headers?: Record<string, string>,
   data?: any
) => {
   const responseData = await fetchPost(url, headers, data);
   return responseData;
};
