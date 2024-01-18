import { Table, Select, Radio } from 'antd';
import "./style.css";
import { useState } from 'react';


function TransactionTable({ transactionArray }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [optionterm, setOptionterm] = useState("")
  const [radioterm, setRadioterm]=useState("");

  console.log("option", optionterm);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Tag',
      dataIndex: 'tag',
      key: 'tag',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
  ];
  let filteredvalue = transactionArray.filter((item) =>
   item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.type.includes(optionterm)) 

   let sortedtransaction=filteredvalue.sort((a,b)=>{
    if(radioterm === "date"){
      return new Date(a.date)- new Date(b.date);
    }else if(radioterm === "amount"){
      return a.amount-b.amount
    }else{
      return 0;
    }
   })

  return <>
    <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

    <Select
    className='selectoption'
      placeholder="Select a person"
      onChange={(value) => setOptionterm(value)}
      value={optionterm}
    >
      <Select.Option value="">All</Select.Option>
      <Select.Option value="income">Income</Select.Option>
      <Select.Option value="expense">Expense</Select.Option>
    </Select>

    <Radio.Group value={radioterm} onChange={(e)=>setRadioterm(e.target.value)}>
        <Radio.Button value="">All sort</Radio.Button>
        <Radio.Button value="date">Sort By Date</Radio.Button>
        <Radio.Button value="amount">Sort By Amount</Radio.Button>
        
      </Radio.Group>

    <Table className='transaciontable' dataSource={sortedtransaction} columns={columns} />;
  </>


}

export default TransactionTable;