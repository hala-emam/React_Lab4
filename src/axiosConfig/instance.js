import axios from 'axios'
import store from './../store/store'
import { changeLoader } from '../store/slices/loader';
const axiosInstance=axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key:"c63490792447aeca84223e0c1bc9ebfb",
    }
})

// request interceptor
axiosInstance.interceptors.request.use((config)=>{
    // console.log(config)
    store.dispatch(changeLoader(true))
    return config
},(err)=>{
   return Promise.reject(err)
}
)
// response interceptor
axiosInstance.interceptors.response.use((res)=>{
    // console.log(config)

    store.dispatch(changeLoader(false))
    return res
},(err)=>{
   return Promise.reject(err)
}
)
export default axiosInstance;