import { Table, Select, Radio } from 'antd';
import "./style.css";
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { unparse,  parse } from 'papaparse';


function TransactionTable({ transactionArray, addtransaction }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [optionterm, setOptionterm] = useState("")
  const [radioterm, setRadioterm] = useState("");

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
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.type && item.type.includes(optionterm))

  let sortedtransaction = filteredvalue.sort((a, b) => {
    if (radioterm === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (radioterm === "amount") {
      return a.amount - b.amount
    } else {
      return 0;
    }
  })

  function exportcsv() {
    var csv = unparse({
      "fields": ["name", "date", "amount", "tag", "type"],
      data: transactionArray
    });
    var data = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    var csvURL = window.URL.createObjectURL(data);
    let tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'transaction.csv');
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  }

  function importfromcsv(e) {
    e.preventDefault();
    try {
      parse(e.target.files[0], {
        header: true,
        complete: async function (result) {
          for (const transactionArray of result.data) {
            console.log("transaction", transactionArray);
            const newTransaction = {
              ...transactionArray,
              amount: parseFloat(transactionArray.amount) || 0
            }
            console.log("newTransaction", newTransaction)
            await addtransaction(newTransaction, true)
          }
        }
      });


    } catch (e) {
      console.log(e);
    }

  }


  return <>
    <div className='input-selection'>
      <div className='input-search'>
        <SearchOutlined className='searchicon' />
        <input type='text' className="inputdiv" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
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

    </div>

    <div className='radiogroupdiv'>
      <h2>My Transaction</h2>
      <Radio.Group value={radioterm} onChange={(e) => setRadioterm(e.target.value)} >
        <Radio.Button value="">All sort</Radio.Button>
        <Radio.Button value="date">Sort By Date</Radio.Button>
        <Radio.Button value="amount">Sort By Amount</Radio.Button>
      </Radio.Group>

      <div className='csvContainer'>
        <button className='btn' onClick={exportcsv}>Export to CSV</button>
        <label for="file-csv" className='btn btn-blue'>Import from CSV</label>
        <input id='file-csv' type='file' accept='.csv' required style={{ display: "none" }}
          onChange={importfromcsv} />
      </div>
    </div>
    <Table className='transaciontable' dataSource={sortedtransaction} columns={columns} />

  </>


}

export default TransactionTable;