import { Container, makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const StyledContainer = styled(Container)``;

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



        .content-social-repo {
          width: 90%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          @media (max-width: 900px){
            justify-content: space-around;
            margin-bottom: 20px;
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
              color: #7e84fc;
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

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  btnInfos: {
   

  }
}));