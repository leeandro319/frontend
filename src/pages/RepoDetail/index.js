import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import moment from "moment";

import api from "../../services/apiGit";
import Header from "../../components/Header";

import { StyledContainerRepo, ContentInfoDev, InfoRepository } from "./styles";
import { Typography } from "@material-ui/core";

import StarIcon from "@material-ui/icons/Star";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CodeIcon from '@material-ui/icons/Code';
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";

const RepoDetail = () => {
  const { params } = useRouteMatch();
  const [datailsRepo, setDetailsRepo] = useState({});

  useEffect(() => {
    api.get(`repos/${params.detail}`).then((res) => {
      const repo = res.data;
      setDetailsRepo(repo);
    });
  }, [params.detail]);

  const dateFormater = (date) => moment(date).format("DD-MM-YYYY");

  return (
    <>
      <StyledContainerRepo>
        <Header />
        <ContentInfoDev>
          <Typography color="primary" variant="h1">
            Detalhes do Repositório
          </Typography>
          <Typography color="primary" variant="h1">
          {datailsRepo.full_name}
          </Typography>
          <div className="static-repo">
            <div className="repo-statis">
              <StarIcon/>
              <p>{datailsRepo.stargazers_count}</p>
            </div>
            <div className="repo-statis">
              <SupervisorAccountIcon />
              <p>{datailsRepo.subscribers_count}</p>
            </div>
            <div className="repo-statis">
              <CodeIcon />
              <p>Linguagens: {datailsRepo.language}</p>
            </div>
            <div className="repo-statis">
              <SwapHorizontalCircleIcon/>
              <p>Forks: {datailsRepo.forks}</p>
            </div>

          </div>
          <div className="dates-repo">
          <p>
            <strong>Nome Completo: </strong> {datailsRepo.full_name}
          </p>
          <p>
            <strong>Data Criação: </strong> {dateFormater(datailsRepo.created_at)}
          </p>
          <p>
            <strong>Ultima atualização: </strong>{" "}
            {dateFormater(datailsRepo.updated_at)}
          </p>
          <p>
            <strong>Ultimo Push: </strong> {dateFormater(datailsRepo.pushed_at)}
          </p>
          </div>
          <div className="repo-statis-link">          
          <p>
            <strong>Link Externo:</strong> {datailsRepo.svn_url}
          </p>
            <a href={datailsRepo.svn_url}>Acessar Repositório</a>
          </div>
        </ContentInfoDev>
        <InfoRepository></InfoRepository>
      </StyledContainerRepo>
    </>
  );
};

export default RepoDetail;
