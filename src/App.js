import React, { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import SearchBar from './components/SearchBar'
import SortButton from './components/SortButton'
import Header from './components/Header'

function App() {
  const [expenses, setExpenses] = useState([
    { name: 'Breakfast', category: 'Food', description: 'Daily', amount: 1 },
    { name: 'Uber eats', category: 'Delievery', description: 'Home', amount: 10 },
    { name: 'Water', category: 'Bills', description: 'Liters', amount: 10 },
  ])

  const handleDelete = (indexToDelete) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete))
  }

  return (
    <>
    <Header/>
    <div className="App">
      
      <ExpenseForm setExpenses={setExpenses} expenses={expenses} />
      <SearchBar expenses={expenses} handleDelete={handleDelete} />
      <SortButton expenses={expenses} setExpenses={setExpenses} />
    </div>
    </>
  )
}

export default App