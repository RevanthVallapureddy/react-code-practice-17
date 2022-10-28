import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amount: '',
    type: 'Income',
    income: 0,
    expenses: 0,
  }

  onDeleteTransaction = (id, type, amount) => {
    const subIncome = type === 'Income' && parseInt(amount)
    const subExpenses = type === 'Expenses' && parseInt(amount)
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        each => id !== each.id,
      ),
      income: prevState.income - subIncome,
      expenses: prevState.expenses - subExpenses,
    }))
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: v4(),
      title,
      amount,
      type,
    }

    const addIncome = type === 'Income' && parseInt(amount)
    const addExpenses = type === 'Expenses' && parseInt(amount)

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      income: prevState.income + addIncome,
      expenses: prevState.expenses + addExpenses,
      title: '',
      amount: '',
      type: 'Income',
    }))
  }

  titleInput = event => {
    this.setState({title: event.target.value})
  }

  amountInput = event => {
    this.setState({amount: event.target.value})
  }

  typeInput = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {title, amount, type, transactionsList, income, expenses} = this.state
    return (
      <div className="container">
        <div className="profile-container">
          <h1 className="greeting">Hi, Richard</h1>
          <p className="welcome">
            Welcome back to your{' '}
            <span className="highlight">Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} />
        <div className="transaction-container">
          <div className="add-transaction">
            <h1 className="sub-heading">Add Transaction</h1>
            <form className="input-form" onSubmit={this.onAddTransaction}>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                placeholder="TITLE"
                id="title"
                value={title}
                onChange={this.titleInput}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="number"
                id="amount"
                value={amount}
                placeholder="Amount"
                onChange={this.amountInput}
              />
              <label htmlFor="type">Type</label>
              <select
                id="type"
                onChange={this.typeInput}
                name="options"
                value={type}
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.displayText}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="his">History</h1>
            <ul className="history-list">
              <li className="history-item">
                <p className="t">Title</p>
                <p className="a">Amount</p>
                <p className="ty">Type</p>
              </li>
              {transactionsList.map(each => (
                <TransactionItem
                  transaction={each}
                  key={each.id}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
