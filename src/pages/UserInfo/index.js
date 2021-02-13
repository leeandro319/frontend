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
  
  useEffect(()=>{

    api.get(`users/${params.usuario}/repos`)
       .then(res => {
         const repositoriesResult = res.data
         setRepositories(repositoriesResult)
       })
  },[params.usuario])
  
  const filterRepository = repositories.sort((a,b)=>b.stargazers_count - a.stargazers_count)

  
  return(
    <StyledContainer maxWidth="lg">
      <ContainerUser>
        <img className="img-user-repo" src="https://avatars.githubusercontent.com/u/39350730?s=460&u=82d063b7a08f675845b7fd6db669f7f6656c574b&v=4" alt="" />
        <div className="info-user-repo">
         <h1>Leandro Guaraldi</h1>
         <p> Bio loren  Bio loren  Bio loren  Bio loren  Bio loren  Bio loren  Bio loren  Bio loren  Bio loren  Bio loren </p>
         <div className="social-user-repo">
         <span>email: leandro@leandro</span>
            <span>0 Followers</span>
            <span>0 Followings</span>
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
              <StarIcon/>
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