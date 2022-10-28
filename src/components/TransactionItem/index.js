import './index.css'

const TransactionItem = props => {
  const {transaction, onDeleteTransaction} = props
  const {title, amount, type, id} = transaction
  const deleteItem = () => {
    onDeleteTransaction(id, type, amount)
  }

  return (
    <li className="history-items">
      <p className="t">{title}</p>
      <p className="a">Rs {amount}</p>
      <p className="ty">{type}</p>
      <button
        type="button"
        className="del-btn"
        onClick={deleteItem}
        testid=" delete"
      >
        <img
          className="del"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default TransactionItem
