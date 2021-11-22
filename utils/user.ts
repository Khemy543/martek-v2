import axios from "axios";
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();


const API = axios.create({
  baseURL: publicRuntimeConfig.backendUrl,
  headers:{
    "Content-Type": "application/json",
  }
});

const UserAPI = {
    // login user
    login: async (email:string, password:string) => {
        try {
            const response  = await API.post(`auth/login`,{
                email, password
            });

            return response
        } catch (error) {
            throw new Error(error.response)
        }
    },

    // fetch user profile
    getProfile: async () => {
        const token : string  = window.localStorage.getItem('authToken');
        try {
            if(!token){
                return
            }
            const response = await API.get('auth/user',{
                headers:{
                    Authorization : `Bearer ${token}`
                }
            });

            return response
        } catch (error) {
            throw new Error(error.response)
        }
    },

    // logout user
    logoutUser : async () => {
        const token : string = window.localStorage.getItem('authToken');

        try {
            const response = await API.post('logout',{
                header:{
                    Authorization : `Bearer ${token}`
                }
            });

            return response
        } catch (error) {
            throw new Error(error.response)
        }
    },

    userCart : async () => {
        const token : string = window.localStorage.getItem('authToken');

        try {
            const response = await API.get('user-cart', {
                headers: {
                    Authorization : `Bearer ${token}`
                }
            });

            return response
            
        } catch (error) {
            throw new Error(error.response)
        }
    }
}


export default UserAPI;
