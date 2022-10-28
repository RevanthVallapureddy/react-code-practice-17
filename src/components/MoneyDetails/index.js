import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props
  const balance = income - expenses

  return (
    <ul className="details-list">
      <li className="balance-item">
        <div>
          <img
            className="balance-img"
            alt="balance"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          />
        </div>
        <div>
          <p className="balance">Your Balance</p>
          <p className="balance-count" testid="balanceAmount">
            {balance}
          </p>
        </div>
      </li>
      <li className="income-item">
        <div>
          <img
            className="income-img"
            alt="income"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          />
        </div>
        <div>
          <p className="income">Your Income</p>
          <p className="income-count" testid="incomeAmount">
            {income}
          </p>
        </div>
      </li>
      <li className="expenses-item">
        <div>
          <img
            className="expenses-img"
            alt="expenses"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          />
        </div>
        <div>
          <p className="expenses">Your Expenses</p>
          <p className="expenses-count" testid="expensesAmount">
            {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}
export default MoneyDetails
