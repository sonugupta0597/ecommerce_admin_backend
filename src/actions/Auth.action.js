import { authConstants } from "./constants"
import {instanceAxios} from '../helper'

export const Loginrequest=(dispatch,user)=>{
         console.log(user);
         dispatch({
             type:authConstants.LOGIN_REQUEST,
             payload:{
                 ...user
             }
         })

         const result = instanceAxios.post('admin/signIn',{
                 ...user
         })

         console.log(result);

         
}