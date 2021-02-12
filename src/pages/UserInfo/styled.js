import { Container } from '@material-ui/core';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`

`;

export const ContainerUser = styled.div`
   width: calc(80% - 80px);
  margin: 30px 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  .img-user-repo{
    width: 150px;
    border-radius: 50%;
  }


  .info-user-repo{
    margin-left: 30px;


  .social-user-repo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    }
  }

`;

export const Repositories = styled.div`
   width: 95%;
   margin: auto;

    a{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;

    background-color: #f2efef;
    border-radius: 5px;
    text-decoration: none;
    margin-bottom: 20px;
    
    img{
      width: 120px;
      border-radius: 50%;
    }

    h3{
      flex: 1;
      width: 90%;
      border-bottom: 1px solid black;
      font-size: 1.3rem;
      color: #201F1F;
      margin: 0;
    }

    .content-repo{

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      flex: 1;
      padding-left: 20px;


      p{
          color: gray;
        }

      .content-social-repo{
        width: 90%;
        display:flex;
        align-items: center;
        justify-content: space-between;

        .icons-social-repo{
        display:flex;
        align-items: center;

          svg{
            margin-right: 05px;
          }

          span{
          color: black;
          }
        }

      }
  
      }
    }
`;