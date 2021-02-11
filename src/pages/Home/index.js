import React from 'react'

import {StyledContainer, Form, UsersSearch} from './styled'
import {Button, TextField} from '@material-ui/core'

import logoGit from '../../assets/Octocat.png'

import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';

function handleUser() {
  
}

const Home = () => {

  return(
    <StyledContainer maxWidth="lg">
      <img className="logo" src={logoGit} alt="Logo GitHub" />
      <h1>Procure um usuário do GitHub.</h1>
      <Form onSubmit={handleUser}>
        <TextField 
          label="Digite o nome do usuário"
          variant="outlined"
          type="text"
          fullWidth
        />
        <Button variant="contained">Procurar</Button>
      </Form>
      <UsersSearch>
        <a href="teste">
          <img className="img-card-user" src="https://avatars.githubusercontent.com/u/39350730?s=460&u=82d063b7a08f675845b7fd6db669f7f6656c574b&v=4" alt="" />
            <div className="content-card-user">
                <h3>Leandro Guaraldi</h3>
                <p> loremloreml oreml ore mlorem loremloreloremloreml oreml ore mlorem loremloreloremloreml oreml ore mlorem loremloreloremloreml oreml ore mlorem loremloreloremloreml oreml ore mlorem loremlore</p>
                <div className="infos-card-user">          
                  <p><AlternateEmailIcon />leandro_319@yahoo.com.br</p>
                  <p><PeopleAltIcon />1000 followers</p>
                  <p><SwapHorizontalCircleIcon />1000 following</p>
               </div>
            </div>
            <ArrowForwardIos />
        </a>

        <a href="teste">
          <img className="img-card-user" src="https://avatars.githubusercontent.com/u/39350730?s=460&u=82d063b7a08f675845b7fd6db669f7f6656c574b&v=4" alt="" />
            <div className="content-card-user">
                <h3>Leandro Guaraldi</h3>
                <p> loremloreml oreml ore mlorem loremloreloremloreml oreml ore mlorem loremloreloremloreml oreml ore mlorem loremloreloremloreml oreml ore mlorem loremloreloremloreml oreml ore mlorem loremlore</p>
                <div className="infos-card-user">          
                  <p><AlternateEmailIcon />leandro_319@yahoo.com.br</p>
                  <p><PeopleAltIcon />1000 followers</p>
                  <p><SwapHorizontalCircleIcon />1000 following</p>
               </div>
            </div>
            <ArrowForwardIos />
        </a>

        <a href="teste">
          <img className="img-card-user" src="https://avatars.githubusercontent.com/u/39350730?s=460&u=82d063b7a08f675845b7fd6db669f7f6656c574b&v=4" alt="" />
            <div className="content-card-user">
                <h3>Leandro Guaraldi</h3>
                <p> loremloreml oreml ore mlorem loremloreloremloreml oreml ore mlorem loremloreloremloreml oreml ore mlorem loremloreloremloreml oreml ore mlorem loremloreloremloreml oreml ore mlorem loremlore</p>
                <div className="infos-card-user">          
                  <p><AlternateEmailIcon />leandro_319@yahoo.com.br</p>
                  <p><PeopleAltIcon />1000 followers</p>
                  <p><SwapHorizontalCircleIcon />1000 following</p>
               </div>
            </div>
            <ArrowForwardIos />
        </a>
      </UsersSearch>
    </StyledContainer>
  )
}
export default Home