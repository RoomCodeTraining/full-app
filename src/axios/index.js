import axios from "axios";
import  { useUserStore }  from "./../stores/user";

/*
* Axios instance
*/
const baseURL = "https://e-service.futurafric.app/api";

const httpClicent = axios.create({
  baseURL: baseURL,
});


httpClicent.interceptors.request.use(config => {
  const user = useUserStore();
  config.headers.Authorization = `Bearer ${user.getToken}`;
  return config;
});

export default httpClicent;
