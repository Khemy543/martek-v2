import axios from "axios";
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const token = null;

const API = axios.create({
  baseURL: publicRuntimeConfig.backendUrl,
  headers:{
    ...(token ? { Authorization: `Bearer ${token}`} : {}),
    "Content-Type": "application/json",
  }
});

const ProductAPI = {
    // get products
    weekProducts: async () => {
        try {
            const response  = await API.get(`fetch/new-this-week`);

            return response
        } catch (error) {
            throw new Error(error.response)
        }
    },
    phonesAndAccessories : async () => {
        try {
            const response = await API.get('/2/product-index');

            return response
        } catch (error) {
            throw new Error(error.response)
        }
    },

    getProductDetails : async (id:number) => {
        try {
            const response = await API.get(`product/${id}/details`);

            return response
        } catch (error) {
            throw new Error(error.response)
        }
    },

    getProductCategories : async () => {
        try {
            const response = await API.get('categories');

            return response
        } catch (error) {
            throw new Error(error.response)
        }
    },

    getCategoryProducts : async (id:number) => {
        try {
            const response = await API.get(`category/${id}/products`);

            return response
        } catch (error) {
            throw new Error(error.response)  
        }
    },

    saveItemToCart : async ({id, cart, amount }) => {
        const token : string = window.localStorage.getItem('authToken');

        const cart_data = [
            cart,
            amount
        ]
        
        try {
            const response = await API.post(`user/${id}/add-cart`,{ cart:cart_data},{
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

export default ProductAPI
