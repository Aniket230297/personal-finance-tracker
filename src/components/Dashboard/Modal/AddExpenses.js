import React from 'react'
import { Modal } from 'antd'

function AddExpenses({isExpenseModalVisible, handleExpenesModal}) {
  return (
    <div>
        <Modal visible={isExpenseModalVisible} onCancel={handleExpenesModal}>
            Expense
            
            </Modal></div>
  )
}

export default AddExpenses;