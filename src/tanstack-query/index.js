import {useQuery,useMutation} from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { login,logout } from "../redux/accountSlice";
import { signin,signout,singup} from "../api/firebase";

export const useSignin=()=>{
    const dispatch=useDispatch();
    return useMutation({
        mutationFn:signin,
        onSuccess:(user)=>{
            dispatch(login(user))
        }
    })
}

export const useSignout=()=>{
    const dispatch=useDispatch();
    return useMutation({
        mutationFn:signout,
        onSuccess:()=>{
            dispatch(logout());
        }
    })
}

export const useSignup=()=>{
    const dispatch=useDispatch();
    return useMutation({
        mutationFn:singup,
        onSuccess:(user)=>{
            dispatch(login(user));
        }
    })
}