import axios from "axios";

const API_URL = "/api/user"

const register = async(formData)=>{

    console.log(formData)
    const response = await axios.post(API_URL + "/register" ,formData )
localStorage.setItem('user', JSON.stringify(response.data));
   return response.data
}
const login = async(formData)=>{
    const res = await axios.post(API_URL+"/login",formData)
localStorage.setItem("user", JSON.stringify(res.data))
return res.data
}
const authService = {
    register,
    login,
}
export default authService;