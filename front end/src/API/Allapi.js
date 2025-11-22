import { commonAPI } from "./CommonAPI";
import { SERVER_URL } from "./ServerUrl";

// Registration API
export const RegistrationApi=async (reqbody)=>{
    return await commonAPI(`post`,`${SERVER_URL}/users/adduser`,reqbody)
}

// Login API
export const loginApi=async (reqbody)=>{
    return await commonAPI(`post`,`${SERVER_URL}/users/login`,reqbody)
}

// Hospital Registration API
export const  hospitalRegistrationApi=async (reqbody)=>{
    return await commonAPI(`post`,`${SERVER_URL}/hospitals/hospitalRegistration`,reqbody)
}

// view all users
export const viewDetailApi=async(reqHeader)=>{
    return await commonAPI(`get`,`${SERVER_URL}/users/getuser`, null, reqHeader)
}