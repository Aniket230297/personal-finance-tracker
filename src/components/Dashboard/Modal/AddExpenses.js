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
      <Modal open={isExpenseModalVisible} onCancel={handleExpenesModal} footer={null} width={400} className='modaldiv' >
        <p style={{ marginBottom: "1rem" }}>Add Expense</p>
        
        <Form style={{ maxWidth: 300, }}
          form={form}
          layout="vertical"
          onFinish={(values) => {
            console.log("onfinish", values);
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
           name="amount"
            rules={[
              {
                required: true,
                message: 'Please input the expense amount!',
              },
            ]} style={{ marginBottom: 8 }}>
            <InputNumber style={inputStyle} />
          </Form.Item>


          <Form.Item label="Date"
           name="date"
            rules={[
            {
              required: true,
              message: 'Please select the expense date!',
            }
          ]} >
            <DatePicker style={inputStyle} format="YYYY-MM-DD" />
          </Form.Item>


          <Form.Item label="tag"
             name="tag"
          style={{ marginBottom: 8 }} rules={[
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