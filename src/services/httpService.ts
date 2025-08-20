
import axios, { type AxiosResponse } from "axios"
import config from "./config.json"
import { errorToast, showToast } from "../utils/toastUtils";

export const apiPath=config.onlinePath

axios.defaults.timeout=10000;

axios.interceptors.response.use(
    (res)=> res,
    (error)=>{
        const res=error?.response;
        if (!res?.status) {
            errorToast('مشکلی در ارتباط با سرور وجود دارد...')
        }else if(res.status >=500){
             errorToast(` مشکلی از سمت سرور رخ داده است (${res.status})`)
        }else if(res.status ===401){
             errorToast(` ورود غیر مجاز (${res.status})`)
        }else if(res.status ===403){
             errorToast(` شما مجاز به استفاده از این قسمت نیستید (${res.status})`)
        }else if(res.status >=400){
             errorToast(` در ورود اطلاعات دقت کنید (${res.status})`)
        }else if(res.status >201){
            const message = res.status.message || ` در ورود اطلاعات دقت کنید ( ${res.status})`
             showToast(message)
        }
        return Promise.reject(error)
    }
)

 const httpService =<T>(
    url:string,
    method:"GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    data?: unknown
):Promise<AxiosResponse<T>> => {
    return axios({baseURL:apiPath , url , method , data})
}


export default httpService;
