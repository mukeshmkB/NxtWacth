import Styled from 'styled-components'

export const SearchContainer = Styled.div`

      display:flex;
      width:90%;
      height:30px;
      border:1px solid #cccccc;
      margin:auto;

      
    @media screen and (min-width:768px){
        width:450px;
        margin-left:28px;
        height:38px;
       
    }
`

export const SearchInput = Styled.input`
    width:90%;
    height:100%;
    border:none;
    outline:none;
    padding:10px;
    font-size:12px;
     color:#606060;
 
 @media screen and (min-width:768px){
     font-size:14px;
 }
    

`
export const Searchbutton = Styled.button`

     width:70px;
    border:none;
    border-left:1px solid #cccccc;
`
