import React, { useState } from 'react'
import {Link} from 'react-router-dom'


import {StyledContainer, Form, UsersSearch} from './styled'
import {Button, TextField} from '@material-ui/core'

import logoGit from '../../assets/Octocat.png'

 import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
 import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
 import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
 import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';
import api from '../../services/apiGit'


const Home = () => {


  const [searchUser, setSearchUser] = useState('') //input
  const [userGit, setUserGit] = useState([])  //array com os users
  

 async function handleUser(e) {
    e.preventDefault()
    const res = await api.get(`users/${searchUser}`)
    const result = res.data
    setUserGit([...userGit, result])
  }

  return(
    <StyledContainer maxWidth="lg">
      <img className="logo" src={logoGit} alt="Logo GitHub" />
      <h1>Procure um usuário do GitHub.</h1>
      <Form onSubmit={handleUser}>
        <TextField 
          label="Digite o nome do usuário"
          variant="outlined"
          type="text"
          value={searchUser}
          onChange={e=>setSearchUser(e.target.value)}
          fullWidth
        />
        <Button variant="contained" type="submit">Procurar</Button>
      </Form>
      <UsersSearch>
      {userGit.map(usuario => (
        <Link to="" key={usuario.login}>
        <img className="img-card-user" src={usuario.avatar_url} alt="" />
        <div className="content-card-user">
            <h3>{usuario.name}</h3>
            <p>{usuario.bio}</p>
            <div className="infos-card-user">          
              <p><AlternateEmailIcon />{usuario.email ? usuario.email :'Não Definido'}</p>
              <p><PeopleAltIcon />{usuario.followers} followers</p>
              <p><SwapHorizontalCircleIcon />{usuario.following} following</p>
           </div>
        </div>
        <ArrowForwardIos />
        </Link>
  ))}

     </UsersSearch>
    </StyledContainer>
  )
}
export default Home