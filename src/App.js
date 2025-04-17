import React, { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import SearchBar from './components/SearchBar'
import SortButton from './components/SortButton'
import Header from './components/Header'

function App() {
  const [expenses, setExpenses] = useState([
    { name: 'Breakfast', category: 'Food', description: 'Daily', amount: 1 },
    { name: 'Uber eats', category: 'Delivery', description: 'Home', amount: 10 },
    { name: 'Water', category: 'Bills', description: 'Liters', amount: 10 },
  ])

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index))
  }

  return (
    <div>
      <Header />
      <div className="App">
        <div className="main-container">
          <div className="table-section">
            <SearchBar expenses={expenses} deleteExpense={deleteExpense} />
          </div>
          <div className="form-section">
            <ExpenseForm setExpenses={setExpenses} expenses={expenses} />
          </div>
        </div>
        <SortButton expenses={expenses} setExpenses={setExpenses} />
      </div>
    </div>
  )
}

export default App