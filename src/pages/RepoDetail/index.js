import {useRouteMatch} from 'react-router-dom'

const RepoDetail = () => {
  const {params} = useRouteMatch()
  return(
    <h1>{params.detail}</h1>
  )
}

export default RepoDetail;