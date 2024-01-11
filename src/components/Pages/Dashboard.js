import React from 'react'
import { useState } from 'react';
import Header from '../Header'
import Cards from '../Dashboard/Card'
import AddExpenses from '../Dashboard/Modal/AddExpenses';
import AddIncome from '../Dashboard/Modal/AddIncome';
import moment from 'moment';
import { db } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';
 

function Dashboard() {
  const [user]=useAuthState(auth);
  const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
  const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);
  const [transaction ,setTransaction]=useState([])

const showIncomeModal=()=>{
    setIsIncomeModalVisible(true);
}

const showExpenseModal=()=>{
  setIsExpenseModalVisible(true);
}

const handleIncomeModal=()=>{
  setIsIncomeModalVisible(false);
}

const handleExpenesModal=()=>{
  setIsExpenseModalVisible(false);
}

<<<<<<< HEAD
const onFinish=(value, type)=>{
  console.log("name" ,value.name);
  console.log("amount" ,value.amount);
  console.log("date" ,value.date);
  console.log("tag" ,value.tag);
  console.log(type)
=======
const onFinish=(values, type)=>{
 const newTransaction={
  type: type,
  date:moment(values.date).format("YYYY-MM-DD"),
  amount:parseFloat(values.amount),
  tag:values.tag,
  name:values.name
 };
 addTransaction(newTransaction)
}

async function addTransaction(transaction){
  const docRef = await addDoc(collection(db, `users/${user.uid}/transction`), {
    transaction
  });
>>>>>>> b0a5695ab396f339e17c02c75b37ac8c30323f8e
}


  return (
    <div>
      <Header />
      <Cards showIncomeModal={showIncomeModal} showExpenseModal={showExpenseModal} />
      <AddIncome isIncomeModalVisible={isIncomeModalVisible} handleIncomeModal={handleIncomeModal}  onFinish={onFinish}/>
      <AddExpenses isExpenseModalVisible={isExpenseModalVisible} handleExpenesModal={handleExpenesModal} onFinish={onFinish}/>
    
    </div>
  )
}

export default Dashboard