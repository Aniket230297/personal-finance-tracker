import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Cards from '../Dashboard/Card'
import AddExpenses from '../Dashboard/Modal/AddExpenses';
import AddIncome from '../Dashboard/Modal/AddIncome';
import { collection } from 'firebase/firestore';
import { toast } from 'react-toastify';
import moment from 'moment';
import { db, auth } from '../Firebase';
import { addDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';



function Dashboard() {
  const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
  const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);
  // const { user } = useAuthState(auth);
  // console.log(user);

  const [user, loading, error] = useAuthState(auth);
if (loading) {
  return <div>Loading...</div>;
}
if (error) {
  console.error(error);
  return <div>Error fetching authentication state</div>;
}
console.log(user);


  const showIncomeModal = () => {
    setIsIncomeModalVisible(true);
  }

  const showExpenseModal = () => {
    setIsExpenseModalVisible(true);
  }

  const handleIncomeModal = () => {
    setIsIncomeModalVisible(false);
  }

  const handleExpenesModal = () => {
    setIsExpenseModalVisible(false);
  }

  const onFinish = (values, type) => {
    const newTransaction = {
      type: type,
      amount: parseFloat(values.amount),
      name: values.name,
      date: moment(values.date).format("YYYY.MM.DD"),
      tag: values.tag
    };

    console.log(newTransaction);

    addtransaction(newTransaction);

  }

  async function addtransaction(transaction) {
    try {
      if(user){
      const DocRef = await addDoc(
        collection(db, `users/${user.uid}/transaction`),
        transaction
      );
      console.log("docref", DocRef);
      toast.success("Transaction added!");
    }
   
   } catch (e) {
      toast.error("Couldnt  add transaction!");
      console.log(e);
    }
  }

  

  return (
    <div>
      <Header />
      <Cards showIncomeModal={showIncomeModal} showExpenseModal={showExpenseModal}
      />
      <AddIncome isIncomeModalVisible={isIncomeModalVisible} handleIncomeModal={handleIncomeModal} onFinish={onFinish} />
      <AddExpenses isExpenseModalVisible={isExpenseModalVisible} handleExpenesModal={handleExpenesModal} onFinish={onFinish} />

    </div>
  )
}

export default Dashboard