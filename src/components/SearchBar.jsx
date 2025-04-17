import React, { useState } from 'react'
import ExpenseTable from './ExpenseTable'

function SearchBar({ expenses, deleteExpense }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredExpenses = expenses.filter(expense =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search expenses..."
        />
      </div>
      <ExpenseTable filteredExpenses={filteredExpenses} handleDelete={deleteExpense} />
    </div>
  )
}

export default SearchBar