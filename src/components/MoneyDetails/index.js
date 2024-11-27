import './index.css'

const MoneyDetails = props => {
  const {eachItemDetails} = props
  const {text, imageUrl, displayText, imageAlt, RS} = eachItemDetails

  return (
    <li>
      <div className={`each-one-container ${displayText}`}>
        <div>
          <img src={imageUrl} alt={imageAlt} className="image" />
        </div>
        <div>
          <p>{text}</p>
          <h1>RS {RS}</h1>
        </div>
      </div>
    </li>
  )
}

export default MoneyDetails
