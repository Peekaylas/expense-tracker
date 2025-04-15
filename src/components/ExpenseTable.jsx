import React from 'react'

function ExpenseTable({ filteredExpenses = [], handleDelete }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.length > 0 ? (
            filteredExpenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>
                  <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No expenses found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ExpenseTable