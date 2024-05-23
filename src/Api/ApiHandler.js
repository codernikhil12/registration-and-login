import { axiosInstance } from "./AxiosInstrance"
import {endPoints} from "./Endpoint"

export const signUp = async (UserData) => {
    try {
        const {data} = await axiosInstance.post(`${endPoints.register}`, UserData)
       return data
    } catch (error) {
      console.error(error)  
    }
}

export const signIn = async (LoginData) => {
   try {
    const data= await axiosInstance.post(`${endPoints.login}`, LoginData)
     console.log(data);
   } catch (error) {
     console.log(error)
   }
}

export const FetchData = async () => {
  try {
    const data = await axiosInstance.get("https://webskitters-student.onrender.com/user/dashboard" )
    return data;
  } catch (error) {
    console.error(error)
  }
}

export const CreateProduct = async (product) => {
  try {
      const {data} = await axiosInstance.post(`${endPoints.createProduct}`, product)
     return data
  } catch (error) {
    console.error(error)  
  }
}