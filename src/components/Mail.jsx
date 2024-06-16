import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from "framer-motion"

const Mail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { selectedMail } = useSelector(store => store.app);

  const deleteMailById = async (id) => {
    try {
      await deleteDoc(doc(db, 'emails', id));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  
}

