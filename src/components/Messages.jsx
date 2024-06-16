import React, { useEffect, useState } from 'react'
import Message from './Message'
import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../redux/appSlice';

const Messages = () => {
  const { searchText, emails } = useSelector(store => store.app);
  const [filterEmail, setFilterEmail] = useState(emails);
  const dispatch = useDispatch();

  

  

  
}

