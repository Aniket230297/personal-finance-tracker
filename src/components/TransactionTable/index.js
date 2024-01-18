import React, { useState } from 'react'
import { Table } from 'antd';
import "./style.css";


function TransactionTable({ transactionArray }) {
    const [searchTerm, setSearchTerm]=useState("");
    

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
  let filteredvalue= transactionArray.filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return <>
    <input type='text' value={searchTerm}  onChange={(e)=>setSearchTerm(e.target.value)}/>
    <Table className='transaciontable' dataSource={filteredvalue} columns={columns} />;
    </>


}

export default TransactionTable;