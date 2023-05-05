import './index.css'

const PasswordItem = props => {
  const {userDetails, showPassword, itemDelete} = props
  const {id, website, username, password, randomNumber} = userDetails
  const userPassword = showPassword ? (
    password
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-image"
    />
  )
  const initial = username.slice(0, 1)

  const onClickDeleteIcon = () => {
    itemDelete(id)
  }

  const randomColorsList = [
    'background-color-orange',
    'background-color-light-orange',
    'background-color-light-green',
    'background-color-green',
    'background-color-red',
  ]

  return (
    <li className="item-container">
      <div className={`initial-container ${randomColorsList[randomNumber]}`}>
        <p className="initial-letter">{initial}</p>
      </div>
      <div>
        <p className="website-name">{website}</p>
        <p className="user-name">{username}</p>
        <p className="user-password">{userPassword}</p>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onClickDeleteIcon}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default PasswordItem
