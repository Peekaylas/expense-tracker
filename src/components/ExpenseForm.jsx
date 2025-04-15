import React, { useState } from 'react'

function ExpenseForm({ setExpenses, expenses }) {
  const [newExpense, setNewExpense] = useState({
    name: '',
    category: '',
    description: '',
    amount: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewExpense({ ...newExpense, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newExpense.name && newExpense.category && newExpense.description && newExpense.amount) {
      setExpenses([...expenses, { ...newExpense, amount: parseFloat(newExpense.amount) }])
      setNewExpense({ name: '', category: '', description: '', amount: '' })
    } else {
      alert('Please fill out all fields.')
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Choose Bears</label>
        <input
          type="text"
          name="name"
          value={newExpense.name}
          placeholder="Chapo ama"
        />
        <label>Choose Expense Category</label>
        <input
          type="text"
          name="category"
          value={newExpense.category}
          placeholder="Wapi"
        />
        <label>Enter Expense Description</label>
        <input
          type="text"
          name="description"
          value={newExpense.description}
          placeholder="Purpose?"
        />
        <label>Enter amount</label>
        <input
          type="number"
          name="amount"
          value={newExpense.amount}
          placeholder="Ngapi"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default ExpenseForm