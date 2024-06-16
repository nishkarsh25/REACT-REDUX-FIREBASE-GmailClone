import React from 'react'
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedMail } from '../redux/appSlice';
import { motion } from 'framer-motion';

const Message = ({ email }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const openMail = () => {
        dispatch(setSelectedMail(email));
        navigate(`/mail/${email.id}`);
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={openMail} className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md">
            
        </motion.div>
    )
}

