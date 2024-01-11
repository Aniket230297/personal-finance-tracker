import React from 'react'
import { Modal, Form, Input, InputNumber, DatePicker, Select, Button } from 'antd';

function AddExpenses({ isExpenseModalVisible, handleExpenesModal, onFinish }) {
  const inputStyle = {
    border: 'none',
    borderBottom: '1px solid #000',
    borderRadius: 0,
    width: "340px"
  };

  const [form] = Form.useForm();
  return (
    <div>
      <Modal open={isExpenseModalVisible} onCancel={handleExpenesModal} footer={null} width={400} >
        <p style={{ marginBottom: "1rem" }}>Add Expense</p>
        
        <Form style={{ maxWidth: 300, }}
          form={form}
          layout="vertical"
          onFinish={(values) => {
            console.log("onfinish");
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
<<<<<<< HEAD
          name="amount"
=======
           name="amount"
>>>>>>> b0a5695ab396f339e17c02c75b37ac8c30323f8e
            rules={[
              {
                required: true,
                message: 'Please input the expense amount!',
              },
            ]} style={{ marginBottom: 8 }}>
            <InputNumber style={inputStyle} />
          </Form.Item>


<<<<<<< HEAD
          <Form.Item
          style={{ marginBottom: 8 }}
           label="Date"
           name="date"
           rules={[
=======
          <Form.Item label="Date"
           name="date"
            rules={[
>>>>>>> b0a5695ab396f339e17c02c75b37ac8c30323f8e
            {
              required: true,
              message: 'Please select the expense date!',
            }
          ]} >
            <DatePicker style={inputStyle} format="YYYY-MM-DD" />
          </Form.Item>


<<<<<<< HEAD
          <Form.Item label="Tag" style={{ marginBottom: 8 }} 
          name="tag"
          rules={[
=======
          <Form.Item label="tag"
             name="tag"
          style={{ marginBottom: 8 }} rules={[
>>>>>>> b0a5695ab396f339e17c02c75b37ac8c30323f8e
            {
              required: true,
              message: 'Please select a tag!',
            },
          ]}  >
            <Select style={inputStyle} >
              <Select.Option value="Food">Food</Select.Option>
              <Select.Option value="Education">Education</Select.Option>
              <Select.Option value="Office">Office</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

            </Form>

      </Modal></div >
  )
}

export default AddExpenses;