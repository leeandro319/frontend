import { Container } from '@material-ui/core';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .logo{
    width: 180px;
    height: 150px;
    margin: 40px auto;
  }

`;

export const Form = styled.form`
  width: calc(80% - 80px);
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 30px;

  button{
    margin: 0 0 0 10px;
    padding: 15px
  }  

`;

export const UsersSearch = styled.div`
  width: calc(80% - 80px);
  a {
    border-radius: 10px;
    background-color: #f2efef;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    text-decoration: none;
    transition: transform .2s ease-in-out;

    &+a{
      margin-top: 16px;
    }

    &:hover{
      //transform: translateX(05px)
    }

    .img-card-user{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    .content-card-user{
      width: 80%;
      padding-left: 20px;
      h3{
        width: 100%;
        font-size: 1.5rem;
        color: #201F1F;
        border-bottom: 1px solid #848484;
      }
      p{
        text-align: justify;
        padding-right: 10px;
        color: #201F1F;
    }
    }

    .infos-card-user{
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;

      p{
        display: flex;
        justify-content: center;
        align-items:center;
      }

    }

    svg{
    margin-left: auto;
  }
    
  }




`;