import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginFormContainer,
  FormBoxContainer,
  LogoImage,
  FormContainer,
  LoginButton,
  CheckInputContainer,
  CheckBoxInput,
  ShowPasswordLabel,
  InputContainer,
  InputLabel,
  UserInput,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMessage: false,
    errorMsg: '',
  }

  onSucesssRenderHome = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    const {history} = this.props
    history.replace('/')
  }

  loginFailure = errorMsg => {
    this.setState({showErrorMessage: true, errorMsg})
  }

  onSubmitData = async event => {
    event.preventDefault()

    const url = 'https://apis.ccbp.in/login'

    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSucesssRenderHome(data.jwt_token)
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickshowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderUserName = value => {
    const {isDarkTheme} = value
    const {username} = this.state
    return (
      <InputContainer>
        <InputLabel dark={isDarkTheme} htmlFor='username'>
          USERNAME
        </InputLabel>
        <UserInput
          type='text'
          onChange={this.onChangeUserName}
          id='username'
          placeholder='Username'
          value={username}
        />
      </InputContainer>
    )
  }

  renderPassword = value => {
    const {isDarkTheme} = value
    const {showPassword, password} = this.state

    return (
      <InputContainer>
        <InputLabel dark={isDarkTheme} htmlFor='password'>
          PASSWORD
        </InputLabel>
        <UserInput
          type={showPassword ? 'text' : 'password'}
          onChange={this.onChangePassword}
          placeholder='Password'
          value={password}
          id='password'
        />
      </InputContainer>
    )
  }

  renderShowPassword = value => (
    <CheckInputContainer>
      <CheckBoxInput
        type='checkbox'
        onClick={this.onClickshowPassword}
        id='show password'
      />
      <ShowPasswordLabel dark={value.isDarkTheme} htmlFor='show password'>
        Show Password
      </ShowPasswordLabel>
    </CheckInputContainer>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to='/' />
    }
    const {showErrorMessage, errorMsg} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginFormContainer dark={isDarkTheme}>
              <FormBoxContainer dark={isDarkTheme}>
                <LogoImage src={websiteLogo} alt='website logo' />
                <FormContainer onSubmit={this.onSubmitData}>
                  {this.renderUserName(value)}
                  {this.renderPassword(value)}
                  {this.renderShowPassword(value)}
                  <LoginButton type='submit'>Login</LoginButton>
                  {showErrorMessage && <ErrorMessage>*{errorMsg}</ErrorMessage>}
                </FormContainer>
              </FormBoxContainer>
            </LoginFormContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
