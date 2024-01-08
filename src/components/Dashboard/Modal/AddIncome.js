import React from 'react'
import { Modal } from 'antd'

function AddIncome({isIncomeModalVisible,handleIncomeModal }) {
  return (
    <div>
              <Modal visible={isIncomeModalVisible} onCancel={handleIncomeModal}>Income</Modal>
    </div>
  )
}

export default AddIncome;