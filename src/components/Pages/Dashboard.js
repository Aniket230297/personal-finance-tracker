import React, { useEffect , useState} from 'react'
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

const onFinish=(values, type)=>{
console.log(values)
}


  
 

  // console.log("income amount", income)
  // console.log("expense amount", expense)
  // console.log(transaction.amount)

 
    
  return (
    <div>
      <Header />
      <Cards showIncomeModal={showIncomeModal} showExpenseModal={showExpenseModal}
       />
      <AddIncome isIncomeModalVisible={isIncomeModalVisible} handleIncomeModal={handleIncomeModal}  onFinish={onFinish}/>
      <AddExpenses isExpenseModalVisible={isExpenseModalVisible} handleExpenesModal={handleExpenesModal} onFinish={onFinish}/>
    
    </div>
  )
}

export default Dashboard