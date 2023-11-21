import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
const userExist = JSON.parse(localStorage.getItem('user'))

const initialState ={
user: userExist? userExist:null,
isLoading:false,
isError:false,
isSuccess:false,
message:"",

}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{

reset:(state, action)=>{
    return{
        ...state,
        isLoading:false,
        isSuccess:false,
        isError:false,
        message:"",
    }
}

    },
    extraReducers:(builder)=>{
builder.addCase(registerUser.pending ,(state)=>{
    state.isLoading = true
})
builder.addCase(registerUser.fulfilled, (state,action)=>{
    state.isLoading=false
    state.isSuccess=true
    state.isError=false
    state.user= action.payload
    state.message=""
})
builder.addCase(registerUser.rejected, (state,action)=>{
    state.isLoading=false
    state.isSuccess=false
    state.isError=true
    state.user=null
    state.message=action.payload;

}).addCase(logoutuser.fulfilled,(state)=>{
    state.user=null
    state.isSuccess=false
})
builder.addCase(loginUser.pending, (state)=>{
    state.isLoading=true
})
builder.addCase(loginUser.fulfilled, (state, action)=>{
    state.isLoading=false
    state.isSuccess=true
    state.isError=false
    state.user=action.payload
    state.message=""
})
builder.addCase(loginUser.rejected,(state)=>{
    state.isLoading=false
    state.isSuccess=false
    state.isError=true
    state.user = null
    state.message="user not found"
})
    }
})
export const{reset}=authSlice.actions;
export default authSlice.reducer;
export const registerUser = createAsyncThunk("REGISTER/USER", async(formData, thunkAPI)=>{
   try {
    return await authService.register(formData)
   } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
   }
})
export const loginUser = createAsyncThunk("LOGIN/USER", async(formData)=>{try {
    return await authService.login(formData)
} catch (error) {
    console.log(error)
}
})

export const logoutuser = createAsyncThunk("LOGOUT/USER", async()=>{
    localStorage.removeItem('user')
})