import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import moment from "moment";

import api from "../../services/apiGit";

import {StyledContainerRepo, ContentInfoDev, InfoRepository} from './styles'


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
      <ContentInfoDev>
        <h1>{datailsRepo.full_name}</h1>
      </ContentInfoDev>
      <InfoRepository>
        
        <div>
          <p>Link Externo: {datailsRepo.url}</p>

        <p>data criação: {dateFormater(datailsRepo.created_at)}</p>
          <p>ultima atualização: {dateFormater(datailsRepo.updated_at)}</p>
          <p>ultimo push:{dateFormater(datailsRepo.pushed_at)}</p>
        </div>
          <p>Estrelas: {datailsRepo.stargazers_count}</p>
          <p>Linguagens:{datailsRepo.language}</p>
          <p>Forks:{datailsRepo.forks}</p>
          <p>subscribers:{datailsRepo.subscribers_count}</p>

      </InfoRepository>
    </StyledContainerRepo>
      </>
  );
};

export default RepoDetail;
