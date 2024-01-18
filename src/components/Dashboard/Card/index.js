import {React}from 'react';
import "./style.css";
import Button from "../../Button/index.js";
import { Card } from 'antd';


function Cards({showExpenseModal,showIncomeModal, income, expense, totalBalance}) {

  return (
    <div> 

      <row className="row-card">
          <Card bordered={true} className="dash-card">
            <h2 className='card-title'>Current Balance</h2>
            <p className='card-value'>₹ {totalBalance}</p>
            <Button text={"Reset Balance"}  btnblue={true} />
          </Card>

          <Card  bordered={true} className="dash-card">
            <h2 className='card-title'>Total Income</h2>
            <p className='card-value'>₹ {income}</p>
            <Button text={"Add Income"} btnblue={true} onClick={showIncomeModal}/>
          </Card>

          <Card bordered={true} className="dash-card">
            <h2 className='card-title'>Total Expenses</h2>
            <p className='card-value'>₹ {expense}</p>
            <Button text={"Add Expenses"}  btnblue={true} onClick={showExpenseModal}/>
          </Card>
      </row>
    </div>
  )
}

export default Cards;




