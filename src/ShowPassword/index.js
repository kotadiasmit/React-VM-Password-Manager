import './index.css'
import {Component} from 'react'
import PasswordList from '../PasswordList'

class ShowPassword extends Component {
  state = {isShowPassword: false, searchInput: ''}

  inputChanged = event => {
    this.setState({searchInput: event.target.value})
  }

  isShowPassChecked = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  filterPasswordList = () => {
    const {searchInput} = this.state
    const {passwordList} = this.props
    const filteredPasswordList = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filteredPasswordList
  }

  render() {
    const {isShowPassword} = this.state
    const {deletePassword} = this.props
    const filteredPasswordList = this.filterPasswordList()
    console.log(filteredPasswordList)
    const passwordListCount = filteredPasswordList.length
    return (
      <div className="show-password-container">
        <div className="header-container">
          <h1 className="heading">Your Passwords</h1>
          <p className="count">{passwordListCount}</p>
          <img
            className="search-img"
            alt="search"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
          />
          <input
            type="search"
            className="search"
            placeholder="Search"
            onChange={this.inputChanged}
          />
        </div>
        <hr />
        <div className="checkBox-container">
          <input
            className="check-box"
            type="checkBox"
            id="checkBox"
            value={isShowPassword}
            onChange={this.isShowPassChecked}
          />
          <label htmlFor="checkBox" className="label">
            Show Passwords
          </label>
        </div>
        {passwordListCount === 0 ? (
          <>
            <img
              className="no-passwords-img"
              alt="no passwords"
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            />
            <p className="heading-center">No Passwords</p>{' '}
          </>
        ) : (
          <ul className="list-container">
            {filteredPasswordList.map(eachList => (
              <PasswordList
                passwordDetail={eachList}
                key={eachList.id}
                isShowPassword={isShowPassword}
                deletePassword={deletePassword}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default ShowPassword
