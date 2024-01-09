import React from 'react'
import { Modal, Form, Input, InputNumber, DatePicker, Select } from 'antd'
import Button from "../../Button"

function AddIncome({ isIncomeModalVisible, handleIncomeModal, onFinish }) {
  const inputStyle = {
    border: 'none',
    borderBottom: '1px solid #000',  // Adjust the color as needed
    borderRadius: 0,
    width: "340px"
  };

  const [form]=Form.useForm();
  return (
    <div>
      <Modal open={isIncomeModalVisible} onCancel={handleIncomeModal} footer={null} width={400}>
        <p style={{ marginBottom: "1rem" }}>Add Expense</p>
        
        <Form style={{ maxWidth: 300, }}
         layout="vertical"
         onFinish={(values)=>{
          onFinish(values, "income");
          form.resetFields();
        }}>

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
            ]} style={{ marginBottom: 8 }}>
            <InputNumber style={inputStyle} />
          </Form.Item>


          <Form.Item label="Date" rules={[
            {
              required: true,
              message: 'Please select the expense date!',
            },
          ]} style={{ marginBottom: 8 }}>
            <DatePicker style={inputStyle} />
          </Form.Item>


          <Form.Item label="select" style={{ marginBottom: 8 }} rules={[
              {
                required: true,
                message: 'Please select a tag!',
              },
            ]} >
            <Select style={inputStyle} >
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="education">Education</Select.Option>
              <Select.Option value="office">Office</Select.Option>
            </Select>
          </Form.Item>

          <Button text={"Add Income"}  type="primary" htmlType="submit" />

        </Form>


      </Modal>
    </div>
  )
}

export default AddIncome;