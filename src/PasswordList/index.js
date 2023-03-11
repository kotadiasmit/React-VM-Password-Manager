import './index.css'

const PasswordList = props => {
  const {passwordDetail, isShowPassword, deletePassword} = props
  const {id, website, userName, password, listSymbol} = passwordDetail

  const deleteClicked = () => {
    deletePassword(id)
  }

  return (
    <li className="password-details-container">
      <h1 className={listSymbol}>{website[0].toUpperCase()}</h1>
      <div>
        <p className="details">{website}</p>
        <p className="details">{userName}</p>
        {isShowPassword ? (
          <p className="details" style={{fontWeight: 400}}>
            {password}
          </p>
        ) : (
          <img
            className="password-img"
            alt="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          />
        )}
      </div>
      <button
        className="delete-btn"
        type="button"
        onClick={deleteClicked}
        data-testid="delete"
      >
        <img
          className="delete-img"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}
export default PasswordList
