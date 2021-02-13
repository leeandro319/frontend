import React, { useEffect, useState } from 'react'
import {useRouteMatch} from 'react-router-dom'
import moment from 'moment'

import api from '../../services/apiGit'

const RepoDetail = () => {

  const {params} = useRouteMatch()
  const [datailsRepo, setDetailsRepo] = useState({});
  const [statusRepo, setStatus] = useState(false)

    useEffect(()=>{ 
      api.get(`repos/${params.detail}`).then(res=>{
        res.status === 200 ? setStatus(true) : setStatus(false)
        const repo = res.data;
        setDetailsRepo(repo)
      })
    },[params.detail])

    const dateFormater = (date) => moment(date).format("DD-MM-YYYY");

  return(
    <>

    
    <h1>Informações do repositório</h1>

    {statusRepo === false 
      ? 'sem informações'
      :   
      <div> 
        <p>Nome completo: {datailsRepo.full_name}</p>
        <p>Nome: {datailsRepo.name}</p>
        <p>Descrição: {datailsRepo.description}</p>
        <p>Estrelas: {datailsRepo.stargazers_count}</p>
        <p>Linguagens:{datailsRepo.language}</p>
        <p>Forks:{datailsRepo.forks}</p>
        <p>url:{datailsRepo.url}</p>
        <p>subscribers:{datailsRepo.subscribers_count}</p>
        <p>subscribers:{dateFormater(datailsRepo.created_at)}</p>
        <p>subscribers:{dateFormater(datailsRepo.updated_at)}</p>
        <p>subscribers:{dateFormater(datailsRepo.pushed_at)}</p>
      </div>
     }
    
    </>
  )
}

export default RepoDetail;