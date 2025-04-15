import React from 'react'

function ExpenseTable(props) {
  const filteredExpenses = props.filteredExpenses

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
            filteredExpenses.map(function(expense, index) {
              return (
                <tr key={index}>
                  <td>{expense.name}</td>
                  <td>{expense.category}</td>
                  <td>{expense.description}</td>
                  <td>${expense.amount}</td>
                  <td>
                    <button onClick={function() { props.handleDelete(index) }} className="delete-button">Delete</button>
                  </td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td>No expenses found.</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ExpenseTable