import React from 'react'
import { useState } from 'react';
import Header from '../Header'
import Cards from '../Dashboard/Card'
import AddExpenses from '../Dashboard/Modal/AddExpenses';
import AddIncome from '../Dashboard/Modal/AddIncome';


function Dashboard() {
  const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
  const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);

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


  return (
    <div>
      <Header />
      <Cards showIncomeModal={showIncomeModal} showExpenseModal={showExpenseModal} />
      <AddIncome isIncomeModalVisible={isIncomeModalVisible} handleIncomeModal={handleIncomeModal} />
      <AddExpenses isExpenseModalVisible={isExpenseModalVisible} handleExpenesModal={handleExpenesModal}/>
    
    </div>
  )
}

export default Dashboard