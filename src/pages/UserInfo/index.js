import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import api from "../../services/apiGit";

import { StyledContainer, ContainerUser, Repositories } from "./styled";

import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import CallSplitIcon from '@material-ui/icons/CallSplit';
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import GitHubIcon from "@material-ui/icons/GitHub";
import StarIcon from "@material-ui/icons/Star";


const UserInfo = () => {
  const { params } = useRouteMatch();
  const [repositories, setRepositories] = useState([]);
  const [owner, setOwner] = useState({});

  useEffect(() => {
    api.get(`users/${params.usuario}/repos`).then((res) => {
      const repositoriesResult = res.data;
      setRepositories(repositoriesResult);
    });
    api.get(`users/${params.usuario}`).then((res) => {
      setOwner(res.data);
    });
  }, [params.usuario]);

  const filterRepository = repositories.sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );

  return (
    <StyledContainer maxWidth="lg">
      <ContainerUser>
        <img className="img-user-repo" src={owner.avatar_url} alt="" />
        <div className="info-user-repo">
          <h1>{owner.name ? owner.name : "Nome não definido"}</h1>
          <p>{owner.bio ? owner.bio : "Descrição não definida"}</p>
          <div className="social-user-repo">
            <div className="social-owner-git">
              <AlternateEmailIcon />
              <span>{owner.email ? owner.email : "não definido"}</span>
            </div>
            <div className="social-owner-git">
              <PeopleAltIcon />
              <span>{owner.followers} Followers</span>
            </div>
            <div className="social-owner-git">
              <SwapHorizontalCircleIcon />
              <span>{owner.following} Followings</span>
            </div>
          </div>
        </div>
      </ContainerUser>

      <Repositories>
        <div>
          <h2>Repositórios</h2>
          
        </div>
        <ul>
          {filterRepository.map((repository) => (
            <li key={repository.id}>
              <div className="content-repo">
                <span className="full-tile-repo">{repository.full_name}</span>
                <h3>{repository.name}</h3>
                <p>{repository.description}</p>
                <div className="content-social-repo">
                  <div className="icons-social-repo">
                    <StarIcon
                      color={
                        repository.stargazers_count > 0 ? "primary" : "disabled"
                      }
                    />
                    <span>{repository.stargazers_count}</span>
                  </div>

                  <div className="icons-social-repo">
                    <GitHubIcon />
                    <a
                      href={repository.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{repository.html_url}</span>
                    </a>
                  </div>

                  <div className="icons-social-repo">
                    <CallSplitIcon />
                    <span>{repository.forks}</span>
                  </div>
                </div>
              </div>
              <Link to={`/repo-detail/${repository.full_name}`} className="more-info-repo">
                <PlayCircleOutlineOutlinedIcon/>
                <span>Mais detalhes</span>
              </Link>
            </li>
          ))}
        </ul>

      </Repositories>
    </StyledContainer>
  );
};

export default UserInfo;
