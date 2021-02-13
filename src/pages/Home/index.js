import React, { useState } from "react";

import CardUser from "../../components/CardUser";

import { StyledContainer, Form, Error } from "./styled";
import { Button, TextField } from "@material-ui/core";

import logoGit from "../../assets/Octocat.png";
import api from "../../services/apiGit";

const Home = () => {
  const [searchUser, setSearchUser] = useState("");
  const [userGit, setUserGit] = useState([]);
  const [errorSearch, setErrorSearch] = useState("");

  async function handleUser(e) {
    e.preventDefault();

    if (!searchUser) {
      setErrorSearch("Digite o nome do Usuário.");
      return;
    }

    try {
      const res = await api.get(`users/${searchUser}`);
      const result = res.data;
      setErrorSearch("");
      setUserGit([...userGit, result]);
      setSearchUser("");
    } catch (err) {
      if (err.response.status === 403) {
        setErrorSearch(
          `Excedeu o numero de requisições, aguarde alguns minutos.`
        );
      } else {
        setErrorSearch(`O Usuário não existe`);
      }
    }
  }

  return (
    <StyledContainer maxWidth="lg">
      <img className="logo" src={logoGit} alt="Logo GitHub" />
      <h1>Procure um usuário do GitHub.</h1>
      <Form onSubmit={handleUser}>
        <TextField
          label="Digite o nome do usuário"
          variant="outlined"
          type="text"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
          fullWidth
        />
        <Button variant="contained" type="submit">
          Procurar
        </Button>
      </Form>
      {errorSearch && <Error>{errorSearch}</Error>}

      {userGit.map((user) => (
        <CardUser
          key={user.login}
          nameUser={user.name}
          sourceImg={user.avatar_url}
          alt={user.login}
          login={user.login}
          bio={user.bio}
          email={user.email}
          followers={user.followers}
          following={user.following}
        />
      ))}
    </StyledContainer>
  );
};
export default Home;
