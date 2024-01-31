import Styled from 'styled-components'

export const LoginFormContainer = Styled.div`

  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  border: 1px solid orangered;
  background-color:${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};

   
`
export const FormBoxContainer = Styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.2);
  width:90%;
  padding: 20px 25px;
  align-items: center;
  border-radius: 6px;
  background-color:${props => (props.dark ? '#000000' : '#f9f9f9')};

  @media screen and (min-width:768px){
    width: 350px;
  }
`
export const LogoImage = Styled.img`
  width: 140px;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 40px;
`

export const FormContainer = Styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const InputContainer = Styled.div`
   display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;

`
export const InputLabel = Styled.label`
  font-family: 'Roboto';
  font-size: 11px;
  font-weight:520;
  color:${props => (props.dark ? '#f4f4f4' : '#7e858e')}; 
   margin-bottom:4px;
`
export const CheckInputContainer = Styled.div`
 margin-top:6px;
 margin-bottom: 20px;
  width: 100%;
`
export const CheckBoxInput = Styled.input`
 
`
export const UserInput = Styled.input`

  font-family: 'Roboto';
  font-size: 12px;
  color:#475569;
  height: 36px;
  padding: 6px;
  border:2px solid #ebebeb;
  background-color:transparent;
  outline:none;
  border-radius:4px;
 
 `
export const ShowPasswordLabel = Styled.label`

    font-family: 'Roboto';
   font-size: 12px;
    color:${props => (props.dark ? '#f4f4f4' : ':#000000')};

   
   
 
 `
export const LoginButton = Styled.button`
  background-color: #3b82f6;
  padding: 8px;
  font-family: 'roboto';
  font-size: 14px;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  margin:15px 0px;
 `
export const ErrorMessage = Styled.p`
 
   font-family: 'roboto';
  font-size: 12px;
  color:#ff0000;
  margin:0px;

`
