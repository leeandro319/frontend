import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import api from "../../services/apiGit";

import { StyledContainer, ContainerUser, Repositories } from "./styled";
import { FormControl, makeStyles, MenuItem, Select } from "@material-ui/core";

import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

const UserInfo = () => {
  const { params } = useRouteMatch();
  const [repositories, setRepositories] = useState([]);
  const [owner, setOwner] = useState({});

  const [filterRepo, setFilterRepo] = useState("1");
  
  const classes = useStyles();

  useEffect(() => {
    api.get(`users/${params.usuario}/repos`).then((res) => {
      const repositoriesResult = res.data;
      repositoriesResult.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );
      setRepositories(repositoriesResult);
    });
    api.get(`users/${params.usuario}`).then((res) => {
      setOwner(res.data);
    });
  }, [params.usuario]);

  const handleSelect = (e) => {
    const valueNow = e.target.value;
    setFilterRepo(valueNow);
    if (valueNow === "1") {
      repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else if (valueNow === "2") {
      repositories.sort((a, b) =>
        a.created_at > b.created_at ? -1 : b.created_at > a.created_at ? 1 : 0
      );
    } else if (valueNow === "3") {
      repositories.sort((a, b) => b.forks - a.forks);
    } else if (valueNow === "4") {
      repositories.sort((a, b) =>
        a.full_name > b.full_name ? 1 : b.full_name > a.full_name ? -1 : 0
      );
    }
  };

  return (
    <>
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
          <div className="title-user-info">
            <h2>Repositórios</h2>
            <FormControl className={classes.formControl}>
              <Select
                labelId="select-filter-repository"
                id="Search"
                value={filterRepo}
                onChange={handleSelect}
              >
                <MenuItem value={"1"}>Mais estrelas</MenuItem>
                <MenuItem value={"2"}>Data de Criação</MenuItem>
                <MenuItem value={"3"}>Mais forks</MenuItem>
                <MenuItem value={"4"}>Ordem alfabetica</MenuItem>
              </Select>
            </FormControl>
          </div>
          <ul>
            {repositories.map((repository) => (
              <li key={repository.id}>
                <div className="content-repo">
                  <span className="full-tile-repo">{repository.full_name}</span>
                  <h3>{repository.name}</h3>
                  <p>{repository.description}</p>
                  <div className="content-social-repo">
                    <div className="icons-social-repo">
                      <StarIcon
                        color={
                          repository.stargazers_count > 0
                            ? "primary"
                            : "disabled"
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
                <Link
                  to={`/repo-detail/${repository.full_name}`}
                  className="more-info-repo"
                >
                  <PlayCircleOutlineOutlinedIcon />
                  <span>Mais detalhes</span>
                </Link>
              </li>
            ))}
          </ul>
        </Repositories>
      </StyledContainer>
    </>
  );
};

export default UserInfo;
