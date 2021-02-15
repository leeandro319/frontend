import styled from "styled-components";



export const ContainerUser = styled.div`
  width: calc(80% - 80px);
  margin: 30px 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  
  @media (max-width: 900px){
    width: auto;
    flex-direction: column;
    padding: 0px;
    
  }

  .img-user-repo {
    width: 150px;
    border-radius: 50%;
    margin: auto;
  }

  .info-user-repo {
    margin-left: 30px;
    flex: 1;

    .social-user-repo {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 900px){
        flex-direction: column;
        align-items: flex-start;


       }

    }

    .social-owner-git {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        color: #7e84fc;
        font-size: 1.8rem;
        padding-right: 5px;
      }
    }
  }
`;

