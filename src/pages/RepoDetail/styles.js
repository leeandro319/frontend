import styled from 'styled-components'

import { Container } from "@material-ui/core";

export const StyledContainerRepo = styled(Container)`
  
  `
export const ContentInfoDev = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 3rem;
  }
  strong{
    color: #7e84fc;
  }
  .static-repo{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media(max-width: 400px){
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  .dates-repo{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media(max-width: 400px){
      align-items: flex-start;
    }
  }

  .repo-statis{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    svg{
      color: #7e84fc;
    }
    @media(max-width: 400px){
      justify-content: flex-start;
      padding: 5px;
    }
  }

  .repo-statis-link{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media(max-width: 400px){
      justify-content: flex-start;
      padding: 5px;
    }
    a{
    background-color: #7e84fc;
    text-decoration: none;
    padding: 15px;
    border-radius: 15px;
    color: #fff;
    transition: all .2s ease-in-out;
    margin-bottom: 30px;
    &:hover{
      background-color: #babdff;
      color:  #7e84fc;
    }
    }
      }
  `
  export const InfoRepository = styled.div`

  `

