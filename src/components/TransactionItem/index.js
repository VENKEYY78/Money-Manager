import './index.css'

const TransactionItem = props => {
  const {eachExpensiveDetails} = props
  const {title, type, amount} = eachExpensiveDetails

  return (
    <li className="history-list">
      <p className="para">{title}</p>
      <p className="para">{amount}</p>
      <p className="para">{type}</p>
      <button className="button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
