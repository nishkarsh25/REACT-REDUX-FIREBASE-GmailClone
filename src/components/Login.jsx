import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import GoogleButton from 'react-google-button';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/appSlice';

const Login = () => {
    
    const dispatch = useDispatch();
     
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            dispatch(setAuthUser({
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL
            }));
        } catch (error) {
            console.log(error);
        }
    }
    return (
        
    )
}

