import React from 'react';
import "./style.css";
import Button from "../../Button/index.js";
import { Card } from 'antd';

function Cards() {
  return (
    <div> 
      <row className="row-card">
          <Card className="dash-card">
            <h2 className='card-title'>Current Balance</h2>
            <p className='card-value'>₹ 0</p>
            <Button text={"Reset Balance"}  btnblue={true}/>
          </Card>

          <Card className="dash-card">
            <h2 className='card-title'>Total Income</h2>
            <p className='card-value'>₹ 0</p>
            <Button text={"Add Income"} btnblue={true}/>
          </Card>

          <Card className="dash-card">
            <h2 className='card-title'>Total Expenses</h2>
            <p className='card-value'>₹ 0</p>
            <Button text={"Add Expenses"}  btnblue={true} />
          </Card>
      </row>
    </div>
  )
}

export default Cards;