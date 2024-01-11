import React from 'react'
import { useState } from 'react';
import Header from '../Header'
import Cards from '../Dashboard/Card'
import AddExpenses from '../Dashboard/Modal/AddExpenses';
import AddIncome from '../Dashboard/Modal/AddIncome';


function Dashboard() {
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

const onFinish=(value, type)=>{
  console.log("name" ,value.name);
  console.log("amount" ,value.amount);
  console.log("date" ,value.date);
  console.log("tag" ,value.tag);
  console.log(type)
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