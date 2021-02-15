import styled from "styled-components";

export const UsersSearch = styled.div`
  width: calc(80% - 80px);
  margin-bottom: 20px;
  @media (max-width: 600px){
    width: 80%;
  }
  a {
    border-radius: 10px;
    background-color: #f2efef;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    text-decoration: none;
    transition: transform 0.2s ease-in-out;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      //transform: translateX(05px)
    }

    .img-card-user {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    .content-card-user {
      width: 80%;
      padding-left: 20px;
      h3 {
        width: 100%;
        font-size: 1.5rem;
        padding-bottom: 10px;

      }
      p {
        text-align: justify;
        padding-right: 10px;
        color: #201f1f;
      }
    }

    .infos-card-user {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;

      p {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    svg {
      margin-left: auto;
    }

    @media (max-width: 500px){
      #emailUser{
            display: none;
          }
    }

    @media (max-width: 1000px){
      flex-direction: column;
        .img-card-user {
          width: 50px;
          height: 50px;
        }
        .infos-card-user {
          display: flex;
          flex-direction: column;
          align-items: flex-start;


        }
    }
  }
`;
