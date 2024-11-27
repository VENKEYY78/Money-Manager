import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSEs',
    displayText: 'Expenses',
  },
]

const List = [
  {
    optionId: 'BALANCE',
    displayText: 'Balance',
    text: 'Your Balance',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    imageAlt: 'balance',
    RS: 0,
  },
  {
    optionId: 'INCOME',
    displayText: 'Income',
    text: 'Your Income',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    imageAlt: 'income',
    RS: 0,
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
    text: 'Your Expenses',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    imageAlt: 'expenses',
    RS: 0,
  },
]

class MoneyManager extends Component {
  state = {
    //  Lists: List,
    expansivesList: [],
    title: '',
    amount: '',
    type: 'Income',
  }

  onEnterTitle = event => {
    // const {title} = this.state
    this.setState({title: event.target.value})
  }

  onEnterAmount = event => {
    //  const {amount} = this.state
    this.setState({amount: event.target.value})
  }

  onSelectType = event => {
    this.setState({type: event.target.value})
  }

  onSalaryAndExpanses = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newExpanses = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      expansivesList: [...prevState.expansivesList, newExpanses],
      title: '',
      amount: '',
      type: 'Income',
    }))
  }

  render() {
    const {title, amount, expansivesList, type} = this.state
    console.log(title)
    console.log(amount)
    console.log(type)

    return (
      <div className="app-container">
        <div className="user-container">
          <h1 className="user-name">Hi Richard</h1>

          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>

        <div className="money-details-container">
          <ul className="money-details-container">
            {List.map(eachItem => (
              <MoneyDetails
                eachItemDetails={eachItem}
                key={eachItem.optionId}
              />
            ))}
          </ul>
        </div>

        <div className="transaction-and-history-container">
          <form className="form-container" onSubmit={this.onSalaryAndExpanses}>
            <h1>Add Transaction</h1>
            <div className="labal-container">
              <label htmlFor="TITLE">TITLE</label>
              <input
                type="text"
                placeholder="TITLE"
                id="TITLE"
                value={title}
                onChange={this.onEnterTitle}
              />
            </div>
            <div className="labal-container">
              <label htmlFor="TITLE">AMOUNT</label>
              <input
                type="text"
                placeholder="AMOUNT"
                id="AMOUNT"
                value={amount}
                onChange={this.onEnterAmount}
              />
            </div>
            <div className="labal-container">
              <label htmlFor="type">TYPE</label>
              <select id="type" className="select" onChange={this.onSelectType}>
                {transactionTypeOptions.map(eachOption => (
                  <option
                    value={eachOption.displayText}
                    key={eachOption.optionId}
                  >
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
          <div className="history">
            <h1 className="history-heading">History</h1>
            <div>
              <div className="history-items">
                <p className="para">Title</p>
                <p className="para">Amount</p>
                <p className="para">Type</p>
                <p className="para"> </p>
              </div>
              <div>
                <ul>
                  {expansivesList.map(eachExpensive => (
                    <TransactionItem
                      eachExpensiveDetails={eachExpensive}
                      key={eachExpensive.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
