import styled from "styled-components";

export const UsersSearch = styled.div`
  width: calc(80% - 80px);
  margin-bottom: 20px;
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
        color: #201f1f;
        border-bottom: 1px solid #848484;
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
  }
`;
