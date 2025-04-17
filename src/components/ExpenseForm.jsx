import React, { useState } from 'react'

function ExpenseForm({ setExpenses, expenses }) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && category && description && amount) {
      setExpenses([...expenses, { name, category, description, amount: parseFloat(amount) }])
      setName('')
      setCategory('')
      setDescription('')
      setAmount('')
    } else {
      alert('Please fill all fields!')
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Expense name"
        />
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  )
}

export default ExpenseForm