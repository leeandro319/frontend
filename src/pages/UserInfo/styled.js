import { Container } from "@material-ui/core";
import styled from "styled-components";

export const StyledContainer = styled(Container)``;

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
        color: red;
        font-size: 1.8rem;
        padding-right: 5px;
      }
    }
  }
`;

export const Repositories = styled.div`
  width: 90%;
  margin: auto;

  .title-user-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 600px){
      flex-direction: column;
    }

  }
  ul {
    padding: 0;
    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 20px;

      background-color: #f2efef;
      border-radius: 5px;
      text-decoration: none;
      margin-bottom: 20px;
      box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.1);
      transition: all 0.1s ease-in-out;

      @media (max-width: 900px){
        flex-direction: column;
      }

      &:hover {
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
      }

      img {
        width: 80px;
        border-radius: 50%;
      }

      .full-tile-repo {
        color: gray;
        font-size: 0.9rem;
        font-style: italic;
        @media (max-width: 900px){
          display: none;
        }

      }

      h3 {
        width: 98%;
        border-bottom: 1px solid gray;
        font-size: 1.3rem;
        color: #201f1f;
        margin: 0;
        word-break: break-all;
      }

      .content-repo {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-left: 20px;

        p {
          max-width: 98%;
          color: gray;
          padding-bottom: 5px;
          word-break: break-all;
        }

        .content-social-repo {
          width: 90%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          @media (max-width: 900px){
            justify-content: space-around;
            #url-git{
                display: none;
              }
          }
          

          .icons-social-repo {
            display: flex;
            align-items: center;
            justify-content: center;
            
            a {
              text-decoration: none;
            }

            svg {
              margin-right: 5px;
            }

            span {
              color: gray;
              font-size: 0.9rem;
            }
          }
        }
      }
      .more-info-repo {
        width: 150px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: gray;
        svg {
          font-size: 2rem;
        }
        span {
          padding-top: 5px;
          font-size: 0.8rem;
        }
      }

    }
  }
`;
