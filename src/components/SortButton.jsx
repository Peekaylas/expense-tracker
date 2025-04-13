import React, { useState } from 'react'

function SortButton({ expenses, setExpenses }) {
  const [sortBy, setSortBy] = useState('')

  const handleSort = () => {
    const sortedExpenses = [...expenses].sort((a, b) =>
      a.category.localeCompare(b.category)
    )
    setExpenses(sortedExpenses)
    setSortBy('category')
  }

  return (
    <div className="sort-container">
      <button onClick={handleSort}>Sort by Category</button>
    </div>
  )
}

export default SortButton