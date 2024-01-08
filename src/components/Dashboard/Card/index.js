import {React}from 'react';
import "./style.css";
import Button from "../../Button/index.js";
import { Card } from 'antd';


function Cards({showExpenseModal,showIncomeModal}) {

  return (
    <div> 
      
      {/* <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}

      <row className="row-card">
          <Card bordered={true} className="dash-card">
            <h2 className='card-title'>Current Balance</h2>
            <p className='card-value'>₹ 0</p>
            <Button text={"Reset Balance"}  btnblue={true} />
          </Card>

          <Card  bordered={true} className="dash-card">
            <h2 className='card-title'>Total Income</h2>
            <p className='card-value'>₹ 0</p>
            <Button text={"Add Income"} btnblue={true} onClick={showIncomeModal}/>
          </Card>

          <Card bordered={true} className="dash-card">
            <h2 className='card-title'>Total Expenses</h2>
            <p className='card-value'>₹ 0</p>
            <Button text={"Add Expenses"}  btnblue={true} onClick={showExpenseModal}/>
          </Card>
      </row>
    </div>
  )
}

export default Cards;




