import React, { useState } from "react";

import CardUser from "../../components/CardUser";

import { StyledContainer, Form, Error, useStyles } from "./styled";
import { Button, TextField, Typography } from "@material-ui/core";

import logo from "../../assets/logo.png";
import api from "../../services/apiGit";


const Home = () => {
  const classes = useStyles();

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
      <img className="logo" src={logo} alt="Logo GitHub" />
      <Typography className={classes.titleHome} color="primary" variant="h1">
        Procure um usuário do GitHub.
      </Typography>
      <Form onSubmit={handleUser}>
        <TextField
          color="primary"
          label="Digite o nome do usuário"
          variant="outlined"
          type="text"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
          fullWidth
        />
        <Button
          color="primary"
          variant="contained" 
          type="submit">
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
