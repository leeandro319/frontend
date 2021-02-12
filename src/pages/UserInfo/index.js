import {Link, useRouteMatch} from 'react-router-dom'

import { StyledContainer, ContainerUser, Repositories } from './styled'

import GitHubIcon from '@material-ui/icons/GitHub'
import StarIcon from '@material-ui/icons/Star'
import ShareIcon from '@material-ui/icons/Share'

const UserInfo = () => {

  //const {params} = useRouteMatch()

  
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
          <Link to="/">
          <img src="https://avatars.githubusercontent.com/u/39350730?s=460&u=82d063b7a08f675845b7fd6db669f7f6656c574b&v=4" alt="" />
          <div className="content-repo">
          <h3>Nome Repositorio</h3>
          <p>bio Repositorio bio Repositorio bio Repositorio bio Repositorio bio Repositorio</p>
            <div class="content-social-repo">
              <div className="icons-social-repo">
                <GitHubIcon/>
                <span>www.github.com</span>
              </div>
              <div className="icons-social-repo">
              <StarIcon/>
                <span>Stars 10</span>
              </div>
              
              <div className="icons-social-repo">
              <ShareIcon/>
                <span>Forks 10</span>
              </div>
            </div>
          </div>
          </Link>
      </Repositories>
    
    </StyledContainer>
  )
}

export default UserInfo