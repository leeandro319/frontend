import {useRouteMatch} from 'react-router-dom'
import api from '../../services/apiGit'

import { StyledContainer, ContainerUser, Repositories } from './styled'

import GitHubIcon from '@material-ui/icons/GitHub'
import StarIcon from '@material-ui/icons/Star'
import ShareIcon from '@material-ui/icons/Share'
import { useEffect, useState } from 'react'

const UserInfo = () => {
  const {params} = useRouteMatch()
  const [repositories, setRepositories] = useState([]);
  const [owner, setOwner] = useState({});

  
  useEffect(()=>{
    api.get(`users/${params.usuario}/repos`)
       .then(res => {
         const repositoriesResult = res.data
         setRepositories(repositoriesResult)
       })
       api.get(`users/${params.usuario}`)
       .then(res => {
        setOwner(res.data)
         
       })
    
    },[params.usuario])


  const filterRepository = repositories.sort((a,b)=>b.stargazers_count - a.stargazers_count)
  
  return(
    <StyledContainer maxWidth="lg">
        <ContainerUser>
        <img className="img-user-repo" src={owner.avatar_url} alt="" />
        <div className="info-user-repo">
          <h1>{owner.name ? owner.name: 'Nome não definido'}</h1>
          <p>{owner.bio ? owner.bio: 'Descrição não definida'}</p>
          <div className="social-user-repo">
          <span>{owner.email ? owner.email : 'email não definido'}</span>
            <span>{owner.followers} Followers</span>
            <span>{owner.following} Followings</span>
          </div>
        </div>
      </ContainerUser>

      <Repositories>  
      <h2>Repositórios</h2>
      <ul>
      {filterRepository
        .map(repository => (
          <li key={repository.id}>
          <div className="content-repo">
          <span>{repository.full_name}</span>
          <h3>{repository.name}</h3>
          <p>{repository.description}</p>
            <div className="content-social-repo">
            <div className="icons-social-repo">
              <StarIcon color={repository.stargazers_count > 0 ? 'primary' : 'disabled'}/>
                <span>{repository.stargazers_count}</span>
              </div>
          
              <div className="icons-social-repo">
                <GitHubIcon/>
                <span>{repository.html_url}</span>
              </div>
           
              <div className="icons-social-repo">
              <ShareIcon/>
                <span>{repository.forks}</span>
              </div>
            </div>
          </div>
          </li>
      ))}
      </ul>


      </Repositories>
    
    </StyledContainer>
  )
}

export default UserInfo