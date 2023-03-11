import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import ShowPassword from '../ShowPassword'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'sky-blue',
]

class AddPassword extends Component {
  state = {passwordList: [], website: '', userName: '', password: ''}

  addToList = event => {
    event.preventDefault()
    const {website, password, userName} = this.state
    if ((website !== '' && password !== '', userName !== '')) {
      const newPasswordDetail = {
        id: uuidv4(),
        website,
        userName,
        password,
        listSymbol: `first-char ${
          initialContainerBackgroundClassNames[
            Math.ceil(
              Math.random() * initialContainerBackgroundClassNames.length - 1,
            )
          ]
        }`,
      }
      this.setState(prevState => ({
        passwordList: [...prevState.passwordList, newPasswordDetail],
        website: '',
        password: '',
        userName: '',
      }))
    }
  }

  websiteNameChanged = event => {
    this.setState({website: event.target.value})
  }

  userNameChanged = event => {
    this.setState({userName: event.target.value})
  }

  passwordChanged = event => {
    this.setState({password: event.target.value})
  }

  deletePassword = id => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {passwordList, website, userName, password} = this.state
    console.log(passwordList)

    return (
      <div className="password-manager-app">
        <img
          className="app-logo"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="add-password-container">
          <form className="add-password-form" onSubmit={this.addToList}>
            <h1 className="form-heading">Add New Password</h1>
            <div className="add-input-container">
              <img
                className="add-input-img"
                alt="website"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
              <input
                onChange={this.websiteNameChanged}
                value={website}
                className="user-input"
                type="text"
                placeholder="Enter Website"
              />
            </div>
            <div className="add-input-container">
              <img
                className="add-input-img"
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                onChange={this.userNameChanged}
                value={userName}
                className="user-input"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div className="add-input-container">
              <img
                className="add-input-img"
                alt="password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              />
              <input
                onChange={this.passwordChanged}
                value={password}
                className="user-input"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <img
            className="password-manager-img"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          />
        </div>
        <ShowPassword
          passwordList={passwordList}
          deletePassword={this.deletePassword}
        />
      </div>
    )
  }
}
export default AddPassword
