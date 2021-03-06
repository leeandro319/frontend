import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import api from "../../services/apiGit";
import Header from "../../components/Header";
import OwnerInfoCard from "../../components/OwnerInfoCard";

import { StyledContainer, Repositories, useStyles, Error } from "./styled";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";

import CallSplitIcon from "@material-ui/icons/CallSplit";
import GitHubIcon from "@material-ui/icons/GitHub";
import StarIcon from "@material-ui/icons/Star";

const UserInfo = () => {
  const { params } = useRouteMatch();
  const [repositories, setRepositories] = useState([]);
  const [owner, setOwner] = useState({});

  const [errorPage, setErrorPage] = useState("");

  const [filterRepo, setFilterRepo] = useState("1");

  const classes = useStyles();

  useEffect(() => {
    api
      .get(`users/${params.usuario}/repos`)
      .then((res) => {
        const repositoriesResult = res.data;
        repositoriesResult.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setRepositories(repositoriesResult);
      })
      .catch((error) => {
        setErrorPage("este usuário não existe");
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
      {errorPage && <Error>{errorPage}</Error>}
      <Header />
      <StyledContainer maxWidth="lg">
        <OwnerInfoCard
          avatar_url={owner.avatar_url}
          name={owner.name}
          bio={owner.bio}
          email={owner.email}
          followers={owner.followers}
          following={owner.following}
        />

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
                <MenuItem value={"1"}>Mais Estrelas</MenuItem>
                <MenuItem value={"2"}>Data de Criação</MenuItem>
                <MenuItem value={"3"}>Mais Forks</MenuItem>
                <MenuItem value={"4"}>Ordem Alfabética</MenuItem>
              </Select>
            </FormControl>
          </div>
          <ul>
            {repositories.map((repository) => (
              <li key={repository.id}>
                <div className="content-repo">
                  <span className="full-tile-repo">{repository.full_name}</span>
                  <Typography color="primary" variant="h3">
                    {repository.name}
                  </Typography>
                  <span>{repository.description}</span>
                  <div className="content-social-repo">
                    <div className="icons-social-repo">
                      <StarIcon
                        color={
                          repository.stargazers_count > 0
                            ? "secondary"
                            : "disabled"
                        }
                      />
                      <span>{repository.stargazers_count}</span>
                    </div>

                    <div className="icons-social-repo" id="url-git">
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
                  <Button
                    className={classes.btnInfos}
                    color="primary"
                    variant="contained"
                  >
                    Mais detalhes
                  </Button>
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
