import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/appSlice';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const SendEmail = () => {
    const [formData, setFormData] = useState({
        recipients: "",
        subject: "",
        message: ""
    })
    const { open } = useSelector(store => store.app);
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "emails"), {
            to: formData.recipients,
            subject: formData.subject,
            message: formData.message,
            createdAt: serverTimestamp(),
        })
        dispatch(setOpen(false));
        setFormData({
            recipients: "",
            subject: "",
            message: ""
        });
    }

    
}

