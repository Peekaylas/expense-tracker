import React from 'react'

function SortButton({ expenses, setExpenses }) {
  const sortExpenses = () => {
    const sorted = [...expenses].sort((a, b) => a.category.localeCompare(b.category))
    setExpenses(sorted)
  }

  return (
    <div className="sort-container">
      <button onClick={sortExpenses}>Sort by Category</button>
    </div>
  )
}

export default SortButton