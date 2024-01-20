import React from 'react';
import { Line } from '@ant-design/charts';
import { Pie } from '@ant-design/charts';
import "./style.css";

const ChartComponent = ({ sortedtransaction }) => {

  const data = sortedtransaction.map((item) => {
    return { date: item.date, amount: item.amount };
  });

  const spendingData= sortedtransaction.filter((item)=>{
    if(item.type === "expense"){
      return{tag:item.tag, amount:item.amount}
    }
  })
  const config = {
    data: data,
    autoFit:true,
    xField: 'date',
    yField: 'amount',
    height: 400,
    width: 800,
  };

  const spendinConfig = {
    data:spendingData,
    autoFit:true,
    angleField: 'amount',
    colorField:'tag',
    height: 400,
    width: 400,
  };

  return (
    <div>
      <div className='chart-container'>
        <div className='linechart'>
      <h2>Your Analytics</h2>
        <Line {...config} />
      </div>

      <div className='piechart'>
      <h2>Your Analytics</h2>
        <Pie {...spendinConfig} className='piechartcode' />
      </div>

      </div>
    </div>
  )
};
export default ChartComponent;