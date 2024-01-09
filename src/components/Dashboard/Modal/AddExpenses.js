import React from 'react'
import { Modal, Form, Input, InputNumber, DatePicker, Select } from 'antd';
import Button from "../../Button"

function AddExpenses({ isExpenseModalVisible, handleExpenesModal, onFinish }) {
  const inputStyle = {
    border: 'none',
    borderBottom: '1px solid #000',  // Adjust the color as needed
    borderRadius: 0,
    width: "340px"
  };
  
  const [form]=form.useForm();
  return (
    <div>
      <Modal open={isExpenseModalVisible} onCancel={handleExpenesModal} footer={null} width={400} >
        <p style={{marginBottom:"1rem"}}>Add Expense</p>
        <Form style={{ maxWidth: 300,}} 
        layout="vertical" 
        onFinish={(values)=>{
          onFinish(values, "expense");
          form.resetFields();
        }}
        >

          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input the name of the transaction!',
              },
            ]}
            style={{ marginBottom: 8 }}
          >
            <Input style={inputStyle} />
          </Form.Item >


          <Form.Item label="Amount" 
          rules={[
            {
              required: true,
              message: 'Please input the expense amount!',
            },
          ]}    style={{ marginBottom: 8 }}>
            <InputNumber style={inputStyle}   />
          </Form.Item>


          <Form.Item label="Date" rules={[
              {
                required: true,
                message: 'Please select the expense date!',
              },
            ]}    style={{ marginBottom: 8 }}>
            <DatePicker style={inputStyle}  />
          </Form.Item>


          <Form.Item label="Tag"    style={{ marginBottom: 8 }} rules={[
              {
                required: true,
                message: 'Please select a tag!',
              },
            ]}  >
            <Select style={inputStyle} >
              <Select.Option value="demo">Food</Select.Option>
              <Select.Option value="demo">Education</Select.Option>
              <Select.Option value="demo">Office</Select.Option>
            </Select>
          </Form.Item>

          <Button text={"Add Expense"} btnblue={true} />

        </Form>


      </Modal></div >
  )
}

export default AddExpenses;