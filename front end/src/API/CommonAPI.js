import axios from "axios";

 export const commonAPI=async(httpMethod,url,reqbody,reqHeader)=>{
    let reqconfig={
        method:httpMethod,
        url,
       headers:reqHeader?reqHeader:{"Content-Type":"application/json"},
        data:reqbody
    }
    return await axios(reqconfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}