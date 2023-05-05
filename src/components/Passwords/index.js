import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class Passwords extends Component {
  state = {
    itemsList: [],
    website: '',
    username: '',
    password: '',
    condition: false,
    searchInput: '',
  }

  onAddItem = event => {
    event.preventDefault()
    const randomNumber = Math.ceil(Math.random() * 4)
    const {website, username, password} = this.state
    if (website !== '' && username !== '' && password !== '') {
      const newItem = {
        id: uuidv4(),
        website,
        username,
        password,
        randomNumber,
      }

      this.setState(prevState => ({
        itemsList: [...prevState.itemsList, newItem],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  showPasswords = () => {
    this.setState(prevState => ({
      condition: !prevState.condition,
    }))
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  itemDelete = id => {
    const {itemsList} = this.state
    const updatedList = itemsList.filter(each => each.id !== id)
    this.setState({
      itemsList: updatedList,
    })
  }

  render() {
    const {
      website,
      username,
      password,
      itemsList,
      condition,
      searchInput,
    } = this.state
    const searchedResults = itemsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="top-section-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-small-image"
          />
          <div className="top-section-card-container">
            <h1 className="card-heading">Add New Password</h1>
            <form onSubmit={this.onAddItem}>
              <div className="text-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="icon"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                  value={website}
                  className="text-bar"
                />
              </div>
              <div className="text-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="icon"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                  value={username}
                  className="text-bar"
                />
              </div>
              <div className="text-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="icon"
                  />
                </div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={password}
                  className="text-bar"
                />
              </div>
              <div className="button-container">
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-large-image"
          />
        </div>
        <div className="bottom-section-container">
          <div className="bottom-top-section">
            <div className="count-container">
              <h1 className="your-password">Your Passwords</h1>
              <p className="count-value">{itemsList.length}</p>
            </div>
            <div className="search-container">
              <div className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="icon"
                />
              </div>
              <input
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                className="search-bar"
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="show-passwords-container">
            <input type="checkbox" onClick={this.showPasswords} id="label" />
            <label htmlFor="label" className="checkbox-label">
              Show Passwords
            </label>
          </div>
          {searchedResults.length !== 0 ? (
            <ul className="list-items">
              {searchedResults.map(eachItem => (
                <PasswordItem
                  key={eachItem.id}
                  userDetails={eachItem}
                  showPassword={condition}
                  itemDelete={this.itemDelete}
                />
              ))}
            </ul>
          ) : (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-image"
              />
              <p className="no-password-text">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Passwords
