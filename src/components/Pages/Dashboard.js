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
import { getDocs } from 'firebase/firestore';
import { query } from 'firebase/firestore';
import TransactionTable from '../TransactionTable';
import ChartComponent from '../ChartComponent';



function Dashboard() {
  const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
  const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0)
  const [totalBalance, setTotalBalance] = useState(0)
  const [loading, setLoading] = useState(false);
  const [transactionArray, setTransactionArray] = useState([]);
  


  const [user] = useAuthState(auth);

  

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
      date:values.date.format("YYYY.MM.DD"),
      tag: values.tag
    };

    console.log(newTransaction);

    addtransaction(newTransaction);

  }

  async function addtransaction(transaction) {
    try {
      if (user) {
        const DocRef = await addDoc(
          collection(db, `users/${user.uid}/transaction`),
          transaction
        );
        console.log("docref", DocRef);
        toast.success("Transaction added!");
        let newarr = transactionArray;
        newarr.push(transaction);
        setTransactionArray(newarr);
        calculateamount()
      }

    } catch (e) {
      toast.error("Couldnt  add transaction!");
      console.log(e);
    }
  }

  useEffect(() => {
    fetchTransaction();
  }, [user]);

  useEffect(() => {
    calculateamount();
  }, [transactionArray])

  async function fetchTransaction() {
    setLoading(true);
    if (user) {
      const q = query(collection(db, `users/${user.uid}/transaction`));
      const querySnapshot = await getDocs(q);
      let transactionsArray = [];

      querySnapshot.forEach((doc) => {
        transactionsArray.push(doc.data());

      })
      setTransactionArray(transactionsArray);
      toast.success("Transaction Fetched");
      console.log("arry", transactionArray);
    }
    setLoading(false);
  }

  function calculateamount() {
    let incomeTotal = 0;
    let expenseTotal = 0;

    transactionArray.forEach((transaction) => {
      if (transaction.type === "income") {
        incomeTotal += transaction.amount;
      } else {
        expenseTotal += transaction.amount;
      }
    })
    setIncome(incomeTotal);
    setExpense(expenseTotal);
    setTotalBalance(incomeTotal - expenseTotal);

  }

  let sortedtransaction = transactionArray.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
  }) 

  return (
    <div>
      <Header />
      {loading ? <>Loading...</> : <><Cards showIncomeModal={showIncomeModal} showExpenseModal={showExpenseModal}
        income={income} expense={expense} totalBalance={totalBalance}
      />
        <AddIncome isIncomeModalVisible={isIncomeModalVisible} handleIncomeModal={handleIncomeModal} onFinish={onFinish} />
        <AddExpenses isExpenseModalVisible={isExpenseModalVisible} handleExpenesModal={handleExpenesModal} onFinish={onFinish} />
       <div>
        
      {transactionArray.length !== 0? <ChartComponent sortedtransaction={sortedtransaction} /> : <p>No ChartComponent</p>}
       </div>
       
        <TransactionTable transactionArray={transactionArray} addtransaction={addtransaction} />
      </>}

    </div>
  )
}

export default Dashboard;